import styled from 'styled-components'
import { theme } from '../../../../styles/Theme'
import { StyledTitle } from '../StyledTitle'
import { Card } from '../card.tsx/Card'

const WorkData = [
	{
		id: 'work1',
		title: 'Engineer',
		time: 'Full Time',
		office: 'ООО «Центр адаптивной кинезиотерапии»',
		location: 'Belarus',
		calendar: 'Nov 2020 - Aug 2023',
	},
]

export function Work() {
	return (
		<StyledWork>
			<StyledTitle>Work Experience</StyledTitle>
			{WorkData.map(work => (
				<Card
					key={work.id}
					title={work.title}
					time={work.time}
					office={work.office}
					location={work.location}
					calendar={work.calendar}
				/>
			))}
		</StyledWork>
	)
}
const StyledWork = styled.div`
	max-width: 704px;
	margin-bottom: 38px;
	@media ${theme.media.tablet} {
		margin-bottom: 25px;
		max-width: 100%;
	}
`
