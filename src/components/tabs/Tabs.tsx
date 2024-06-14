import styled, { css } from 'styled-components'
import { font } from '../../styles/Common'
import { theme } from '../../styles/Theme'

export type StatusType = 'all' | 'landing' | 'react' | 'spa'

export type TabsType = { id: string; text: string; status: StatusType }

type TabsPropsType = {
	tabs: TabsType[]
	currentFilterStatus: string
	changeFilterStatus: (value: StatusType) => void
}

export const Tabs: React.FC<TabsPropsType> = (props: TabsPropsType) => {
	return (
		<StyledTabs>
			{props.tabs.map(item => (
				<Link
					key={item.id}
					active={props.currentFilterStatus === item.status}
					as={'button'}
					onClick={() => {
						props.changeFilterStatus(item.status)
					}}
				>
					{item.text}
				</Link>
			))}
		</StyledTabs>
	)
}

const StyledTabs = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	max-width: 722px;
	width: 100%;
	margin: 0 auto;
`

const Link = styled.a<{ active?: boolean }>`
	${font({
		family: 'Cormorant Garamond',
		weight: 400,
		lineHeight: 1.3,
		Fmax: 24,
		Fmin: 14,
	})}
	letter-spacing: 0%;
	color: ${theme.colors.accentColor};
	transition: ${theme.animations.transition};
	${props =>
		props.active &&
		css<{ active?: boolean }>`
			color: ${theme.colors.mainTitleColor};
		`}
	position: relative;
	&:hover {
		color: ${theme.colors.mainTitleColor};
	}
	&:after {
		content: '';
		display: inline-block;
		position: absolute;
		bottom: -4px;
		left: 0;
		right: 0;
		height: 0px;
		transition: ${theme.animations.transition};
		background-color: ${theme.colors.mainTitleColor};

		${props =>
			props.active &&
			css<{ active?: boolean }>`
				height: 2px;
			`}
	}
`
