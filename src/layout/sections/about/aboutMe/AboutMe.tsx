import styled from 'styled-components'
import { theme } from '../../../../styles/Theme'
import { StyledTitle } from '../StyledTitle'

export function AboutMe() {
	return (
		<StyledAboutMe>
			<StyledTitle>About Me</StyledTitle>
			<StyledAboutText>
				The Generator App is an online tool that helps you to export ready-made
				templates ready to work as you r future website. It helps you to combine
				slides, panels and other components and export it as a set of static
				files: HTML/CSS/JS.
			</StyledAboutText>
		</StyledAboutMe>
	)
}

const StyledAboutMe = styled.div`
	max-width: 708px;
	margin-bottom: 38px;
	@media ${theme.media.tablet} {
		margin-bottom: 25px;
		max-width: 100%;
	}
`

const StyledAboutText = styled.p`
	font-size: 18px;
	font-weight: 400;
	line-height: 26px;
	letter-spacing: 0px;
	color: ${theme.colors.accentColor};
	@media ${theme.media.tablet} {
		font-size: 16px;
		line-height: 24px;
	}
`
