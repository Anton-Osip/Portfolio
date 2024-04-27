import styled from 'styled-components'
import { FlexWrapper } from '../../../components/FlexWrapper'
import { SectionSubtitle } from '../../../components/SectionSubtitle'
import { SectionTitle } from '../../../components/SectionTitle'
import { Project } from './project/Project'

import proj from '../../../assets/image/proj-1.webp'
import proj1 from '../../../assets/image/proj-2.webp'
import proj2 from '../../../assets/image/proj-3.webp'
import proj3 from '../../../assets/image/proj-4.webp'
import proj4 from '../../../assets/image/proj-5.webp'
import proj5 from '../../../assets/image/proj-6.webp'

export default function Projects() {
	return (
		<StyledProjects>
			<SectionTitle>Projects</SectionTitle>
			<SectionSubtitle>Things I’ve built so far</SectionSubtitle>
			<FlexWrapper justify='space-between' wrap='wrap'>
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
			</FlexWrapper>
		</StyledProjects>
	)
}

const StyledProjects = styled.section`
	background-color: #99c994;
	min-height: 100lvh;
`
