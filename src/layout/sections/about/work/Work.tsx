import styled from 'styled-components'
import { StyledTitle } from '../StyledTitle'
import { Card } from '../card.tsx/Card'

export function Work() {
	return (
		<StyledWork>
			<StyledTitle>Work Experience</StyledTitle>
			<Card
				title='Junior Web Developer'
				time='Full Time'
				office='Dr. Rajkumar’s Learning App'
				location='Bengaluru'
				calendar='Sep 2021 - Dec 2021'
			/>
			<Card
				title='Junior Web Developer'
				time='Full Time'
				office='Dr. Rajkumar’s Learning App'
				location='Bengaluru'
				calendar='Sep 2021 - Dec 2021'
			/>
			<Card
				title='Junior Web Developer'
				time='Full Time'
				office='Dr. Rajkumar’s Learning App'
				location='Bengaluru'
				calendar='Sep 2021 - Dec 2021'
			/>
		</StyledWork>
	)
}
const StyledWork = styled.div`
	margin-bottom: 38px;
	max-width: 704px;
`
