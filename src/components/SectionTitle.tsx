import styled from 'styled-components'
import { font } from '../styles/Common'
import { theme } from '../styles/Theme'

export const SectionTitle = styled.h2`
	${font({
		lineHeight: 1.2,
		weight: 700,
		Fmax: 48,
		Fmin: 28,
	})}
	margin-bottom: 50px;
	letter-spacing: 0px;
	text-align: center;
	color: ${theme.colors.fontColor};
	@media ${theme.media.tablet} {
		margin-bottom: 40px;
	}
`
