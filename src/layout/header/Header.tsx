import styled from 'styled-components'
import { Container } from '../../components/Container'
import { FlexWrapper } from '../../components/FlexWrapper'
import { Logo } from '../../components/logo/Logo'
import { Menu } from '../../components/menu/Menu'
import { Social } from '../../components/social/Social'

export function Header() {
	return (
		<StyledHeader>
			<Container>
				<FlexWrapper justify='space-between' align='center'>
					<Logo />
					<FlexWrapper align='center' gap='50'>
						<Menu />
						<Social />
					</FlexWrapper>
				</FlexWrapper>
			</Container>
		</StyledHeader>
	)
}

const StyledHeader = styled.header`
	padding: 67px 0 25px;
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	z-index: 9999;
`
