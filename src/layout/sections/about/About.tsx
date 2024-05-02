import styled from 'styled-components'
import { AboutMe } from './aboutMe/AboutMe'
import Education from './education/Education'
import { Work } from './work/Work'

export function About() {
	return (
		<StyledAbout>
			<AboutMe />
			<Work />
			<Education />
		</StyledAbout>
	)
}

const StyledAbout = styled.section`
	min-height: 100lvh;
	background-color: #aebff8;
`
