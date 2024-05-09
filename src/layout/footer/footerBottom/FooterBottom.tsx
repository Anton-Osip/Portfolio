import styled from 'styled-components'
import { Menu } from '../../../components/menu/Menu'
import { theme } from '../../../styles/Theme'

export function FooterBottom() {
	return (
		<StyledFooterBottom>
			<Menu />
			<StyledFooterText>
				Designed and built by <span>Pavan MG</span> with <span>Love</span> &
				<span>Coffee</span>
			</StyledFooterText>
		</StyledFooterBottom>
	)
}

const StyledFooterBottom = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding-top: 45px;
	a {
		font-size: 18px;
	}
`

const StyledFooterText = styled.p`
	font-size: 18px;
	font-weight: 400;
	line-height: 26px;
	letter-spacing: 0px;
	color: ${theme.colors.accentColor};
	span:nth-child(1) {
		background: linear-gradient(90deg, #7368d4, #9a4ac6);
		background-clip: text;
		-webkit-text-fill-color: transparent;
	}
	span:nth-child(2) {
		background: linear-gradient(90deg, #b139be, #c12db8);
		background-clip: text;
		-webkit-text-fill-color: transparent;
	}
	span:nth-child(3) {
		background: linear-gradient(90deg, #ce23b4, #e313ac);
		background-clip: text;
		-webkit-text-fill-color: transparent;
	}
`
