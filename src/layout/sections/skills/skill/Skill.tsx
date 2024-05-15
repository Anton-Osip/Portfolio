import styled from 'styled-components'
import { Icon } from '../../../../components/icon/Icon'

type SkillPropsType = {
	iconId: string
	width: string
	height: string
	viewBox: string
	color?: string
}

export function Skill(props: SkillPropsType) {
	return (
		<StyledSkill>
			<Icon
				iconId={props.iconId}
				width={props.width}
				height={props.height}
				viewBox={props.viewBox}
				color={props.color}
			/>
		</StyledSkill>
	)
}

const StyledSkill = styled.div`
	width: 100%;
	aspect-ratio: 1/1;
	display: flex;
	align-items: center;
	justify-content: center;
`
