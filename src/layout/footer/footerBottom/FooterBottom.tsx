import styled from 'styled-components'
import { Menu } from '../../../components/menu/Menu'

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
`

const StyledFooterText = styled.p``
