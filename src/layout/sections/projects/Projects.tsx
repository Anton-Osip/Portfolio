import styled from 'styled-components'
import { SectionSubtitle } from '../../../components/SectionSubtitle'
import { SectionTitle } from '../../../components/SectionTitle'
import { Project } from './project/Project'

import proj from '../../../assets/image/proj-1.webp'
import proj1 from '../../../assets/image/proj-2.webp'
import proj2 from '../../../assets/image/proj-3.webp'
import proj3 from '../../../assets/image/proj-4.webp'
import proj4 from '../../../assets/image/proj-5.webp'
import proj5 from '../../../assets/image/proj-6.webp'
import { Container } from '../../../components/Container'
import { theme } from '../../../styles/Theme'

export function Projects() {
	return (
		<StyledProjects>
			<Container>
				<SectionTitle>Projects</SectionTitle>
				<SectionSubtitle>Things I’ve built so far</SectionSubtitle>
				<ProjectsWrapper>
					<Project
						imageSrc={proj}
						projectTitle='Project Tile goes here'
						projectDescription='This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content'
						projectStack=' HTML , JavaScript, SASS, React'
					/>
					<Project
						imageSrc={proj1}
						projectTitle='Project Tile goes here'
						projectDescription='This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content'
						projectStack=' HTML , JavaScript, SASS, React'
					/>
					<Project
						imageSrc={proj2}
						projectTitle='Project Tile goes here'
						projectDescription='This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content'
						projectStack=' HTML , JavaScript, SASS, React'
					/>
					<Project
						imageSrc={proj3}
						projectTitle='Project Tile goes here'
						projectDescription='This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content'
						projectStack=' HTML , JavaScript, SASS, React'
					/>
					<Project
						imageSrc={proj4}
						projectTitle='Project Tile goes here'
						projectDescription='This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content'
						projectStack=' HTML , JavaScript, SASS, React'
					/>
					<Project
						imageSrc={proj5}
						projectTitle='Project Tile goes here'
						projectDescription='This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content'
						projectStack=' HTML , JavaScript, SASS, React'
					/>
				</ProjectsWrapper>
			</Container>
		</StyledProjects>
	)
}

const StyledProjects = styled.section`
	min-height: calc(100lvh - 157px);
	padding: 100px 0 50px;
	@media ${theme.media.tablet} {
		min-height: calc(100lvh - 116px);
		padding: 30px 0;
	}
`

const ProjectsWrapper = styled.section`
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	grid-auto-rows: auto;
	gap: 60px;
	@media ${theme.media.tablet} {
		grid-template-columns: repeat(2, 1fr);
		gap: 40px;
	}
	@media ${theme.media.mobile} {
		grid-template-columns: repeat(1, 1fr);
		gap: 20px;
	}
`
