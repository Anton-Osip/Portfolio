import { Icon } from '../../../../components/icon/Icon'
import { S } from '../Project_Styles'

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
		<S.Project>
			<S.Image src={props.imageSrc} alt={props.projectTitle} />
			<S.Info>
				<S.Title>{props.projectTitle}</S.Title>
				<S.Description>{props.projectDescription}</S.Description>
				<S.Stack>Tech stack : {props.projectStack}</S.Stack>
				<S.LinksList>
					<S.Link href={props.link} target='_blank'>
						<Icon
							iconId='linkIcon'
							width='20'
							height='20'
							viewBox='0 0 20 20'
							color='#fff'
						/>
						Live Preview
					</S.Link>
					<S.Link href={props.projectLink} target='_blank'>
						<Icon
							iconId='githubProjectIcon'
							width='20'
							height='20'
							viewBox='0 0 20 20'
							color='#fff'
						/>
						View Code
					</S.Link>
				</S.LinksList>
			</S.Info>
		</S.Project>
	)
}
