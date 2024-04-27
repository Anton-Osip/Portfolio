import styled from 'styled-components'
import { FlexWrapper } from '../../../components/FlexWrapper'
import { SectionSubtitle } from '../../../components/SectionSubtitle'
import { SectionTitle } from '../../../components/SectionTitle'
import Skill from './skill/Skill'

export function Skills() {
	return (
		<StyledSkills>
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
				<Skill iconId='jsIcon' width='120' height='120' viewBox='0 0 120 120' />
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
				<Skill iconId='jsIcon' width='120' height='120' viewBox='0 0 120 120' />
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
			</FlexWrapper>
		</StyledSkills>
	)
}

const StyledSkills = styled.section`
	background-color: #bebebe;
	min-height: 100lvh;
`
