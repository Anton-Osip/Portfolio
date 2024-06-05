import styled from 'styled-components'
import { Icon } from '../../../../components/icon/Icon'
import { theme } from '../../../../styles/Theme'

type ProjectPropsType = {
	imageSrc: string
	projectTitle: string
	projectDescription: string
	projectStack: string
	link: string
	projectLink: string
}

export function Project(props: ProjectPropsType) {
	return (
		<StyledProject>
			<ProjectImage src={props.imageSrc} alt={props.projectTitle} />
			<ProjectTitle>{props.projectTitle}</ProjectTitle>
			<ProjectDescription>{props.projectDescription}</ProjectDescription>
			<ProjectStack>Tech stack : {props.projectStack}</ProjectStack>
			<ProjectLinks>
				<ProjectLink href={props.link} target='_blank'>
					<Icon
						iconId='linkIcon'
						width='20'
						height='20'
						viewBox='0 0 20 20'
						color='#fff'
					/>
					Live Preview
				</ProjectLink>
				<ProjectLink href={props.projectLink} target='_blank'>
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
	border-radius: 20px;
	box-shadow: 2px 2px 100px 0px rgba(0, 0, 0, 0.2);
	background: ${theme.colors.secondaryBg};
	overflow: hidden;
`
const ProjectImage = styled.img`
	aspect-ratio: 375/260;
	max-height: 260px;
	object-fit: cover;
	margin-bottom: 27px;
`
const ProjectTitle = styled.h4`
	margin-bottom: 17px;
	padding: 0 25px;
	font-size: 28px;
	font-weight: 500;
	line-height: 26px;
	letter-spacing: 0px;
	text-align: center;
	@media ${theme.media.tablet} {
		padding: 0 15px;
		font-size: 22px;
	}
`
const ProjectDescription = styled.p`
	padding: 0 25px;
	margin-bottom: 12px;
	font-size: 18px;
	font-weight: 300;
	line-height: 26px;
	letter-spacing: 0px;
	@media ${theme.media.tablet} {
		padding: 0 15px;
		font-size: 16px;
		line-height: 20px;
	}
`
const ProjectStack = styled.p`
	margin-bottom: 21px;
	padding: 0 25px;
	font-size: 14px;
	font-weight: 300;
	line-height: 26px;
	letter-spacing: 0px;
	line-height: 26px;
	@media ${theme.media.tablet} {
		padding: 0 15px;
		line-height: 20px;
	}
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
	display: flex;
	justify-content: space-between;
	padding: 0 8px 25px;
	@media ${theme.media.tablet} {
		padding: 0 15px 15px;
	}
`
