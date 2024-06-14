import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'
import { Container } from '../../../components/Container'
import { SectionSubtitle } from '../../../components/SectionSubtitle'
import { SectionTitle } from '../../../components/SectionTitle'
import { GoToTop } from '../../../components/goToTop/GoToTop'
import { StatusType, Tabs, TabsType } from '../../../components/tabs/Tabs'
import { S } from './Project_Styles'
import { ProjectData } from './progectsData'
import { Project } from './project/Project'

const DataTabs: TabsType[] = [
	{ id: 'tab1', text: 'ALL', status: 'all' },
	{ id: 'tab2', text: 'LANDING PAGE', status: 'landing' },
	{ id: 'tab3', text: 'REACT', status: 'react' },
	{ id: 'tab4', text: 'SPA', status: 'spa' },
]

export const Projects: React.FC = () => {
	const [currentFilterStatus, setCurrentFilterStatus] = useState('all')
	let filteredWorks = ProjectData

	if (currentFilterStatus === 'landing') {
		filteredWorks = ProjectData.filter(project => project.type === 'landing')
	}
	if (currentFilterStatus === 'react') {
		filteredWorks = ProjectData.filter(project => project.type === 'react')
	}
	if (currentFilterStatus === 'spa') {
		filteredWorks = ProjectData.filter(project => project.type === 'spa')
	}

	function changeFilterStatus(value: StatusType) {
		setCurrentFilterStatus(value)
	}

	return (
		<S.Projects>
			<Container>
				<SectionTitle>Projects</SectionTitle>
				<SectionSubtitle>Things I’ve built so far</SectionSubtitle>
				<Tabs
					tabs={DataTabs}
					changeFilterStatus={changeFilterStatus}
					currentFilterStatus={currentFilterStatus}
				/>
				<S.ProjectsWrapper>
					<AnimatePresence>
						{filteredWorks.map(project => (
							<motion.div
								layout
								key={project.id}
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								exit={{ opacity: 0 }}
							>
								<Project
									imageSrc={project.imageSrc}
									projectTitle={project.projectTitle}
									projectDescription={project.projectDescription}
									projectStack={project.projectStack}
									link={project.link}
									projectLink={project.projectLink}
								/>
							</motion.div>
						))}
					</AnimatePresence>
				</S.ProjectsWrapper>
			</Container>
			<GoToTop />
		</S.Projects>
	)
}
