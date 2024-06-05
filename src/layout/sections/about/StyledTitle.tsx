import styled from 'styled-components'
import { font } from '../../../styles/Common'
import { theme } from '../../../styles/Theme'

export const StyledTitle = styled.h4`
	${font({
		lineHeight: 1.2,
		weight: 700,
		Fmax: 42,
		Fmin: 30,
	})}
	line-height: 52px;
	letter-spacing: -0.4px;
	margin-bottom: 38px;
	color: ${theme.colors.fontColor};
	@media ${theme.media.tablet} {
		margin-bottom: 15px;
	}
`
