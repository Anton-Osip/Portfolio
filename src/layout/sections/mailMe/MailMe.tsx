import styled from 'styled-components'
import { Footer } from '../../footer/Footer'

export function MailMe() {
	return (
		<>
			<StyledMailMe>
				<StyledDescription>For any questions please mail me:</StyledDescription>
				<StyledLink href='mailto:hi@pavanmg.in'>hi@pavanmg.in </StyledLink>
			</StyledMailMe>
			<Footer />
		</>
	)
}

const StyledMailMe = styled.section`
	min-height: 100lvh;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`
const StyledDescription = styled.p``
const StyledLink = styled.a``
