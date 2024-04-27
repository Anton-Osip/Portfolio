import styled from 'styled-components'
import { FlexWrapper } from '../../components/FlexWrapper'
import { Logo } from '../../components/logo/Logo'
import { Menu } from '../../components/menu/Menu'
import { Social } from '../../components/social/Social'

export function Header() {
	return (
		<StyledHeader>
			<Logo />
			<FlexWrapper align='center' gap='50'>
				<Menu />
				<Social />
			</FlexWrapper>
		</StyledHeader>
	)
}

const StyledHeader = styled.header`
	background-color: #ff8888;
	display: flex;
	justify-content: space-between;
`
