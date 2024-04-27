import styled from 'styled-components'
import { Icon } from '../../../../components/icon/Icon'

type SkillPropsType = {
	iconId: string
	width: string
	height: string
	viewBox: string
}

export function Skill(props: SkillPropsType) {
	return (
		<StyledSkill>
			<Icon
				iconId={props.iconId}
				width={props.width}
				height={props.height}
				viewBox={props.viewBox}
			/>
		</StyledSkill>
	)
}

const StyledSkill = styled.div`
	min-width: 16%;
	display: flex;
	align-items: center;
	justify-content: center;
	margin-bottom: 80px;
`
