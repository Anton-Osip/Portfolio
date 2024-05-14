import styled from 'styled-components'
import { theme } from '../styles/Theme'

export const SectionTitle = styled.h2`
	margin-bottom: 50px;
	font-size: 48px;
	font-weight: 700;
	line-height: 26px;
	letter-spacing: 0px;
	text-align: center;
	color: ${theme.colors.fontColor};
	@media ${theme.media.tablet} {
		font-size: 34px;
		line-height: 36px;
		margin-bottom: 40px;
	}
	@media ${theme.media.mobile} {
		font-size: 28px;
		line-height: 30px;
	}
`
