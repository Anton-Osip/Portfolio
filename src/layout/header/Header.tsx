import styled from 'styled-components'
import Logo from '../../components/logo/Logo'
import Menu from '../../components/menu/Menu'
import Social from '../../components/social/Social'

export function Header() {
	return (
		<StyledHeader>
			<Logo />
			<Menu />
			<Social />
		</StyledHeader>
	)
}

const StyledHeader = styled.header`
	background-color: #00ff8c;
	display: flex;
	justify-content: space-between;
`
