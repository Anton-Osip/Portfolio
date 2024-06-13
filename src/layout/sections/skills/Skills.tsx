import { Slide } from 'react-awesome-reveal'
import styled from 'styled-components'
import { Container } from '../../../components/Container'
import { SectionSubtitle } from '../../../components/SectionSubtitle'
import { SectionTitle } from '../../../components/SectionTitle'
import { GoToTop } from '../../../components/goToTop/GoToTop'
import { theme } from '../../../styles/Theme'
import { Skill } from './skill/Skill'

type SkillsDataType = {
	iconId: string
	width: string
	height: string
	viewBox: string
	color?: string
}
const SkillsData: SkillsDataType[] = [
	{ iconId: 'htmlIcon', width: '120', height: '120', viewBox: '0 0 120 120' },
	{ iconId: 'cssIcon', width: '120', height: '120', viewBox: '0 0 120 120' },
	{ iconId: 'jsIcon', width: '120', height: '120', viewBox: '0 0 120 120' },
	{ iconId: 'reactIcon', width: '113', height: '101', viewBox: '0 0 113 101' },
	{ iconId: 'reduxIcon', width: '105', height: '100', viewBox: '0 0 105 100' },
	{ iconId: 'bootstrapIcon', width: '88', height: '87', viewBox: '0 0 88 87' },
	{
		iconId: 'tailwindIcon',
		width: '131',
		height: '131',
		viewBox: '0 0 131 131',
	},
	{ iconId: 'sassIcon', width: '117', height: '87', viewBox: '0 0 117 87' },
	{ iconId: 'gitIcon', width: '105', height: '105', viewBox: '0 0 105 105' },
	{
		iconId: 'greensockIcon',
		width: '120',
		height: '120',
		viewBox: '0 0 120 120',
		color: '#fff',
	},
	{ iconId: 'vscodeIcon', width: '112', height: '112', viewBox: '0 0 112 112' },
	{
		iconId: 'githubSkillIcon',
		width: '88',
		height: '88',
		viewBox: '0 0 88 88',
		color: '#fff',
	},
]

export const Skills: React.FC = () => {
	return (
		<StyledSkills>
			<Container>
				<SectionTitle>My Tech Stack</SectionTitle>
				<SectionSubtitle>
					Technologies I’ve been working with recently
				</SectionSubtitle>
				<SkillsContainer>
					{SkillsData.map(skill => (
						<Slide key={skill.iconId}>
							<Skill
								iconId={skill.iconId}
								width={skill.width}
								height={skill.height}
								viewBox={skill.viewBox}
								color={skill.color}
							/>
						</Slide>
					))}
				</SkillsContainer>
			</Container>
			<GoToTop />
		</StyledSkills>
	)
}

const StyledSkills = styled.section`
	min-height: calc(100lvh - 157px);
	padding: 100px 0 50px;
	@media ${theme.media.tablet} {
		min-height: calc(100lvh - 116px);
		padding: 30px 0;
	}
`

const SkillsContainer = styled.div`
	display: grid;
	grid-template-columns: repeat(6, 1fr);
	grid-auto-flow: row;

	@media ${theme.media.tablet} {
		grid-template-columns: repeat(4, 1fr);
	}
	@media ${theme.media.mobile} {
		grid-template-columns: repeat(2, 1fr);
	}
`
