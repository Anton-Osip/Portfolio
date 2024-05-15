import styled from 'styled-components'
import { FlexWrapper } from '../../../../components/FlexWrapper'
import { Icon } from '../../../../components/icon/Icon'
import { theme } from '../../../../styles/Theme'

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
			<FlexWrapper justify='space-between' align='center' wrap='wrap'>
				<FlexWrapper gap='24' align='center' wrap='wrap'>
					<StyledCardText>
						<Icon
							iconId='officeBuildingIcon'
							width='16'
							height='12'
							viewBox='0 0 16 12'
							color='#a7a7a7'
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
								color='#a7a7a7'
							/>
							{props.location}
						</StyledCardText>
					) : (
						<></>
					)}
				</FlexWrapper>
				<StyledCardText>
					<Icon
						iconId='calendarIcon'
						width='16'
						height='12'
						viewBox='0 0 16 12'
						color='#a7a7a7'
					/>
					{props.calendar}
				</StyledCardText>
			</FlexWrapper>
		</StyledCard>
	)
}

const StyledCard = styled.div`
	margin-bottom: 30px;
	padding-bottom: 24px;
	border-bottom: 2px solid #ebeaed;
`
const StyledCardTitle = styled.h4`
	font-size: 20px;
	font-weight: 400;
	line-height: 28px;
	letter-spacing: 1px;
	color: ${theme.colors.mainTitleColor};
`
const StyledCardTime = styled.div`
	padding: 7px 22px;
	margin-bottom: 15px;
	white-space: nowrap;
	color: #018c0f;
	background-color: #d7ffe0;
	border-radius: 100px;
`
const StyledCardText = styled.p`
	font-size: 12px;
	font-weight: 500;
	line-height: 28px;
	letter-spacing: 1px;
	color: ${theme.colors.accentColor};
`
