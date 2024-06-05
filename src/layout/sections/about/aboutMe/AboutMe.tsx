import styled from 'styled-components'
import { font } from '../../../../styles/Common'
import { theme } from '../../../../styles/Theme'
import { StyledTitle } from '../StyledTitle'

export function AboutMe() {
	return (
		<StyledAboutMe>
			<StyledTitle>About Me</StyledTitle>
			<StyledAboutText>
				I'm an enthusiastic and detail-oriented Frontend Software Engineer
				seeking an entry-level position with Company to use my skills in coding,
				troubleshooting complex problems, and assisting in the timely completion
				of projects.
			</StyledAboutText>
		</StyledAboutMe>
	)
}

const StyledAboutMe = styled.div`
	max-width: 708px;
	margin-bottom: 38px;
	@media ${theme.media.tablet} {
		margin-bottom: 25px;
		max-width: 100%;
	}
`

const StyledAboutText = styled.p`
	${font({
		lineHeight: 1.2,
		weight: 400,
		Fmax: 24,
		Fmin: 16,
	})}
	color: ${theme.colors.accentColor};
`
