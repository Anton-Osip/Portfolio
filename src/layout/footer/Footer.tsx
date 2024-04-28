import styled from 'styled-components'
import { FooterBottom } from './footerBottom/FooterBottom'
import { FooterTop } from './footerTop/FooterTop'

export function Footer() {
	return (
		<StyledFooter>
			<FooterTop />
			<FooterBottom />
		</StyledFooter>
	)
}

const StyledFooter = styled.footer`
	background-color: #f6f8a3;
`
