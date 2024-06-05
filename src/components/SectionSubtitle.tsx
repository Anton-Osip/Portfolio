import styled from 'styled-components'
import { font } from '../styles/Common'
import { theme } from '../styles/Theme'

export const SectionSubtitle = styled.p`
	margin-bottom: 112px;
	${font({
		lineHeight: 1.2,
		weight: 400,
		Fmax: 32,
		Fmin: 22,
	})}
	letter-spacing: 0px;
	text-align: center;
	color: ${theme.colors.accentColor};
	@media ${theme.media.tablet} {
		margin-bottom: 80px;
	}
	@media ${theme.media.mobile} {
		margin-bottom: 40px;
	}
`
