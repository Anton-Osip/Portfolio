import styled from 'styled-components'
import { Container } from '../../../components/Container'
import { FlexWrapper } from '../../../components/FlexWrapper'
import { SectionSubtitle } from '../../../components/SectionSubtitle'
import { SectionTitle } from '../../../components/SectionTitle'
import { Skill } from './skill/Skill'

export function Skills() {
	return (
		<StyledSkills>
			<Container>
				<SectionTitle>My Tech Stack</SectionTitle>
				<SectionSubtitle>
					Technologies I’ve been working with recently
				</SectionSubtitle>
				<FlexWrapper justify='space-between' wrap='wrap'>
					<Skill
						iconId='htmlIcon'
						width='120'
						height='120'
						viewBox='0 0 120 120'
					/>
					<Skill
						iconId='cssIcon'
						width='120'
						height='120'
						viewBox='0 0 120 120'
					/>
					<Skill
						iconId='jsIcon'
						width='120'
						height='120'
						viewBox='0 0 120 120'
					/>
					<Skill
						iconId='reactIcon'
						width='113'
						height='101'
						viewBox='0 0 113 101'
					/>
					<Skill
						iconId='reduxIcon'
						width='105'
						height='100'
						viewBox='0 0 105 100'
					/>
					<Skill
						iconId='bootstrapIcon'
						width='88'
						height='87'
						viewBox='0 0 88 87'
					/>
					<Skill
						iconId='tailwindIcon'
						width='131'
						height='131'
						viewBox='0 0 131 131'
					/>
					<Skill
						iconId='sassIcon'
						width='117'
						height='87'
						viewBox='0 0 117 87'
					/>
					<Skill
						iconId='gitIcon'
						width='105'
						height='105'
						viewBox='0 0 105 105'
					/>
					<Skill
						iconId='greensockIcon'
						width='120'
						height='120'
						viewBox='0 0 120 120'
						color='#fff'
					/>
					<Skill
						iconId='vscodeIcon'
						width='112'
						height='112'
						viewBox='0 0 112 112'
					/>
					<Skill
						iconId='githubSkillIcon'
						width='88'
						height='88'
						viewBox='0 0 88 88'
						color='#fff'
					/>
				</FlexWrapper>
			</Container>
		</StyledSkills>
	)
}

const StyledSkills = styled.section`
	min-height: calc(100lvh - 157px);
	padding: 100px 0 50px;
`
