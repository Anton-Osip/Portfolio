import styled from 'styled-components'
import { theme } from '../../../styles/Theme'
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
	min-height: calc(100lvh - 157px);
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`
const StyledDescription = styled.p`
	color: ${theme.colors.fontColor};
	font-family: DM Sans;
	font-size: 58px;
	font-weight: 700;
	line-height: 70px;
	letter-spacing: -1px;
	text-align: center;
`
const StyledLink = styled.a`
	background: linear-gradient(90deg, rgb(19, 176, 245), rgb(231, 15, 170));
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
	background-clip: text;
	font-family: DM Sans;
	font-size: 58px;
	font-weight: 700;
	line-height: 70px;
	letter-spacing: -1px;
	text-align: center;
`
