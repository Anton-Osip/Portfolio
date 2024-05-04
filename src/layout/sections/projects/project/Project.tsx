import styled from 'styled-components'
import { Icon } from '../../../../components/icon/Icon'
import { theme } from '../../../../styles/Theme'

type ProjectPropsType = {
	imageSrc: string
	projectTitle: string
	projectDescription: string
	projectStack: string
}

export function Project(props: ProjectPropsType) {
	return (
		<StyledProject>
			<ProjectImage src={props.imageSrc} alt={props.projectTitle} />
			<ProjectTitle>{props.projectTitle}</ProjectTitle>
			<ProjectDescription>{props.projectDescription}</ProjectDescription>
			<ProjectStack>Tech stack : {props.projectStack}</ProjectStack>
			<ProjectLinks>
				<ProjectLink>
					<Icon
						iconId='linkIcon'
						width='20'
						height='20'
						viewBox='0 0 20 20'
						color='#fff'
					/>
					Live Preview
				</ProjectLink>
				<ProjectLink>
					<Icon
						iconId='githubProjectIcon'
						width='20'
						height='20'
						viewBox='0 0 20 20'
						color='#fff'
					/>
					View Code
				</ProjectLink>
			</ProjectLinks>
		</StyledProject>
	)
}

const StyledProject = styled.div`
	max-width: calc(33% - 30px);
	margin-bottom: 60px;
	border-radius: 20px;
	box-shadow: 2px 2px 100px 0px rgba(0, 0, 0, 0.2);
	background: ${theme.colors.secondaryBg};
`
const ProjectImage = styled.img`
	width: 100%;
	margin-bottom: 27px;
`
const ProjectTitle = styled.h4`
	padding: 0 30px;
	font-size: 28px;
	font-weight: 500;
	line-height: 26px;
	letter-spacing: 0px;
	text-align: center;
	margin-bottom: 17px;
`
const ProjectDescription = styled.p`
	padding: 0 30px;
	font-size: 18px;
	font-weight: 300;
	line-height: 26px;
	letter-spacing: 0px;
	margin-bottom: 12px;
`
const ProjectStack = styled.p`
	font-size: 14px;
	font-weight: 300;
	line-height: 26px;
	letter-spacing: 0px;
	padding: 0 30px;
	margin-bottom: 21px;
`
const ProjectLink = styled.a`
	color: #ffffff;
	font-size: 16px;
	font-weight: 400;
	line-height: 26px;
	letter-spacing: 0px;
	text-align: left;
	text-decoration-line: underline;
	cursor: pointer;

	svg {
		margin-right: 12px;
	}
`

const ProjectLinks = styled.div`
	padding: 0 30px 30px;
	display: flex;
	justify-content: space-between;
`
