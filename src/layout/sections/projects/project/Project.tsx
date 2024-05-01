import styled from 'styled-components'
import { FlexWrapper } from '../../../../components/FlexWrapper'
import { Icon } from '../../../../components/icon/Icon'

type ProjectPropsType = {
	imageSrc: string
	projectTitle: string
	projectDescription: string
	projectStack: string
}

export function Project(props: ProjectPropsType) {
	return (
		<StyledProject>
			<ProjectImage src={props.imageSrc} alt='' />
			<ProjectTitle>{props.projectTitle}</ProjectTitle>
			<ProjectDescription>{props.projectDescription}</ProjectDescription>
			<ProjectStack>Tech stack : {props.projectDescription}</ProjectStack>
			<FlexWrapper gap='48'>
				<ProjectLink>
					<Icon iconId='linkIcon' width='20' height='20' viewBox='0 0 20 20' />
					Live Preview
				</ProjectLink>
				<ProjectLink>
					<Icon
						iconId='githubProjectIcon'
						width='20'
						height='20'
						viewBox='0 0 20 20'
					/>
					View Code
				</ProjectLink>
			</FlexWrapper>
		</StyledProject>
	)
}

const StyledProject = styled.div`
	max-width: calc(33% - 30px);
	margin-bottom: 60px;
`
const ProjectImage = styled.img`
	width: 100%;
`
const ProjectTitle = styled.h4``
const ProjectDescription = styled.p``
const ProjectStack = styled.p``
const ProjectLink = styled.a``
