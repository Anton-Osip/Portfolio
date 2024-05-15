import styled from 'styled-components'
import { theme } from '../../../../styles/Theme'
import { StyledTitle } from '../StyledTitle'
import { Card } from '../card.tsx/Card'

export default function Education() {
	return (
		<StyledEducation>
			<StyledTitle>Education</StyledTitle>
			<Card
				title='Junior Web Developer'
				time='Full Time'
				office='Dr. Rajkumar’s Learning App'
				calendar='Sep 2021 - Dec 2021'
			/>
		</StyledEducation>
	)
}

const StyledEducation = styled.div`
	max-width: 704px;
	margin-bottom: 38px;
	@media ${theme.media.tablet} {
		margin-bottom: 25px;
		max-width: 100%;
	}
`
