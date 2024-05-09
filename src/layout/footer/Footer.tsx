import styled from 'styled-components'
import { Container } from '../../components/Container'
import { FooterBottom } from './footerBottom/FooterBottom'
import { FooterTop } from './footerTop/FooterTop'

export function Footer() {
	return (
		<StyledFooter>
			<Container>
				<FooterTop />
				<FooterBottom />
			</Container>
		</StyledFooter>
	)
}

const StyledFooter = styled.footer`
	padding-bottom: 60px;
`
