import styled from 'styled-components'
import { theme } from '../../../styles/Theme'

export function MailMe() {
	return (
		<>
			<StyledMailMe>
				<StyledDescription>For any questions please mail me:</StyledDescription>
				<StyledLink href='mailto:hi@pavanmg.in'>hi@pavanmg.in </StyledLink>
			</StyledMailMe>
		</>
	)
}

const StyledMailMe = styled.section`
	min-height: calc(100lvh - 157px);
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	@media ${theme.media.tablet} {
		min-height: calc(100lvh - 116px);
		padding: 30px 0;
	}
`
const StyledDescription = styled.p`
	font-family: DM Sans;
	font-size: 58px;
	font-weight: 700;
	line-height: 70px;
	letter-spacing: -1px;
	text-align: center;
	color: ${theme.colors.fontColor};
	@media ${theme.media.tablet} {
		font-size: 50px;
		line-height: 62px;
	}
	@media ${theme.media.mobile} {
		font-size: 40px;
		line-height: 52px;
	}
`
const StyledLink = styled.a`
	font-family: DM Sans;
	font-size: 58px;
	font-weight: 700;
	line-height: 70px;
	letter-spacing: -1px;
	text-align: center;
	background: linear-gradient(90deg, rgb(19, 176, 245), rgb(231, 15, 170));
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
	background-clip: text;
	@media ${theme.media.tablet} {
		font-size: 50px;
		line-height: 62px;
	}
	@media ${theme.media.mobile} {
		font-size: 40px;
		line-height: 52px;
	}
`
