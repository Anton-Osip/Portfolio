import styled from 'styled-components'
import { FlexWrapper } from '../../../../components/FlexWrapper'
import { Icon } from '../../../../components/icon/Icon'
type CardPropsType = {
	title: string
	time: string
	office: string
	location?: string
	calendar: string
}
export function Card(props: CardPropsType) {
	return (
		<StyledCard>
			<FlexWrapper justify='space-between'>
				<StyledCardTitle>{props.title}</StyledCardTitle>
				<StyledCardTime>{props.time}</StyledCardTime>
			</FlexWrapper>
			<FlexWrapper justify='space-between'>
				<StyledCardText>
					<Icon
						iconId='office-buildingIcon'
						width='16'
						height='12'
						viewBox='0 0 16 12'
					/>
					{props.office}
				</StyledCardText>
				{props.location ? (
					<StyledCardText>
						<Icon
							iconId='locationIcon'
							width='16'
							height='12'
							viewBox='0 0 16 12'
						/>
						{props.location}
					</StyledCardText>
				) : (
					<></>
				)}

				<StyledCardText>
					<Icon
						iconId='calendarIcon'
						width='16'
						height='12'
						viewBox='0 0 16 12'
					/>
					{props.calendar}
				</StyledCardText>
			</FlexWrapper>
		</StyledCard>
	)
}

const StyledCard = styled.div``
const StyledCardTitle = styled.h4``
const StyledCardTime = styled.div``
const StyledCardText = styled.p``
