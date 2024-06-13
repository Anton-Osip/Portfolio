import { Slide } from 'react-awesome-reveal'
import styled from 'styled-components'
import drawing from '../../../assets/image/drawing.svg'
import { Container } from '../../../components/Container'
import { GoToTop } from '../../../components/goToTop/GoToTop'
import { theme } from '../../../styles/Theme'
import { AboutMe } from './aboutMe/AboutMe'
import Education from './education/Education'
import { Work } from './work/Work'

export function About() {
	return (
		<StyledAbout>
			<Container>
				<Slide>
					<AboutMe />
				</Slide>
				<Slide>
					<Work />
				</Slide>
				<Slide>
					<Education />
				</Slide>
			</Container>
			<GoToTop />
		</StyledAbout>
	)
}

const StyledAbout = styled.section`
	min-height: calc(100lvh - 157px);
	padding: 50px 0;
	background-image: url(${drawing});
	background-repeat: no-repeat;
	background-position: right center;

	@media ${theme.media.tablet} {
		min-height: calc(100lvh - 116px);
		padding: 30px 0;
	}
`
