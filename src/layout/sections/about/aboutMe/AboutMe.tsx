import styled from 'styled-components'
import { StyledTitle } from '../StyledTitle'

export function AboutMe() {
	return (
		<div>
			<StyledTitle>About Me</StyledTitle>
			<StyledAboutMe>
				The Generator App is an online tool that helps you to export ready-made
				templates ready to work as you r future website. It helps you to combine
				slides, panels and other components and export it as a set of static
				files: HTML/CSS/JS.
			</StyledAboutMe>
		</div>
	)
}

const StyledAboutMe = styled.p``
