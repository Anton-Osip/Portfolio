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
	margin-bottom: 38px;
	max-width: 708px;
`

const StyledAboutText = styled.p`
	color: ${theme.colors.accentColor};
	font-family: Poppins;
	font-size: 18px;
	font-weight: 400;
	line-height: 26px;
	letter-spacing: 0px;
`
