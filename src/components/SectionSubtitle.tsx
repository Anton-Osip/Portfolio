import styled from 'styled-components'
import { theme } from '../styles/Theme'

export const SectionSubtitle = styled.p`
	margin-bottom: 112px;

	font-size: 32px;
	font-weight: 400;
	line-height: 34px;
	letter-spacing: 0px;
	text-align: center;
	color: ${theme.colors.accentColor};
	@media ${theme.media.tablet} {
		font-size: 26px;
		line-height: 28px;
		margin-bottom: 80px;
	}
	@media ${theme.media.mobile} {
		font-size: 22px;
		line-height: 24px;
	}
`
