import styled from 'styled-components'
import { Container } from '../../../components/Container'
import { AboutMe } from './aboutMe/AboutMe'
import Education from './education/Education'
import { Work } from './work/Work'

import drawing from '../../../assets/image/drawing.svg'

export function About() {
	return (
		<StyledAbout>
			<Container>
				<AboutMe />
				<Work />
				<Education />
			</Container>
		</StyledAbout>
	)
}

const StyledAbout = styled.section`
	min-height: calc(100lvh - 157px);
	padding: 50px 0;
	background-image: url(${drawing});
	background-repeat: no-repeat;
	background-position: right center;
`
