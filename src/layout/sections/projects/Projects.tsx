import styled from 'styled-components'
import coffeeHouse from '../../../assets/image/coffee-house.webp'
import nonograms from '../../../assets/image/nonograms.webp'
import pomodoro from '../../../assets/image/pomodoro.webp'
import { Container } from '../../../components/Container'
import { SectionSubtitle } from '../../../components/SectionSubtitle'
import { SectionTitle } from '../../../components/SectionTitle'
import { Tabs } from '../../../components/tabs/Tabs'
import { theme } from '../../../styles/Theme'
import { Project } from './project/Project'

const DataTabs = [
	{ id: 'tab1', text: 'ALL', active: true },
	{ id: 'tab2', text: 'LANDING PAGE', active: false },
	{ id: 'tab3', text: 'REACT', active: false },
	{ id: 'tab4', text: 'SPA', active: false },
]

const ProjectData = [
	{
		id: 'pomodoro',
		imageSrc: pomodoro,
		projectTitle: 'Pomodoro',
		projectDescription:
			'An application that is a task tracker with a timer using the Pomodoro method, providing statistics for a selected period of time.',
		projectStack:
			'TypeScript, React, Redux-ToolKit, Formic + yup, Webpack, SCSS;',
		link: 'https://646e096d69f8740c0e4f020d--osip-pomodoro.netlify.app/#/pomodoro',
		projectLink: 'https://github.com/Anton-Osip/Pomodoro',
	},
	{
		id: 'nonograms',
		imageSrc: nonograms,
		projectTitle: 'Nonograms',
		projectDescription: 'The classic game is nonograms.',
		projectStack: 'JavaScript, Webpack, SCSS, HTML5;',
		link: 'https://anton-osip.github.io/nonograms-game/#main',
		projectLink: 'https://github.com/Anton-Osip/nonograms-game',
	},
	{
		id: 'coffeeHouse',
		imageSrc: coffeeHouse,
		projectTitle: 'Coffee House',
		projectDescription: 'Two-page website for a coffee shop',
		projectStack: 'HTML5, CSS, JavaScript, Figma;',
		link: 'https://anton-osip.github.io/Coffee-house/home.html',
		projectLink: 'https://github.com/Anton-Osip/Coffee-house',
	},
]

export function Projects() {
	return (
		<StyledProjects>
			<Container>
				<SectionTitle>Projects</SectionTitle>
				<SectionSubtitle>Things I’ve built so far</SectionSubtitle>
				<Tabs tabs={DataTabs} />
				<ProjectsWrapper>
					{ProjectData.map(project => (
						<Project
							key={project.id}
							imageSrc={project.imageSrc}
							projectTitle={project.projectTitle}
							projectDescription={project.projectDescription}
							projectStack={project.projectStack}
							link={project.link}
							projectLink={project.projectLink}
						/>
					))}
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
	margin-top: 50px;
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
