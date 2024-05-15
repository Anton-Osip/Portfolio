import { useState } from 'react'
import styled, { css } from 'styled-components'
import { Container } from '../../components/Container'
import { FlexWrapper } from '../../components/FlexWrapper'
import { Logo } from '../../components/logo/Logo'
import { Menu } from '../../components/menu/Menu'
import { Social } from '../../components/social/Social'
import { theme } from '../../styles/Theme'

export function Header() {
	const [menuIsOpen, setMenuIsOpen] = useState(false)
	return (
		<StyledHeader>
			<Container>
				<FlexWrapper justify='space-between' align='center'>
					<Logo />
					<BurgerButton
						isOpen={menuIsOpen}
						onClick={() => {
							setMenuIsOpen(!menuIsOpen)
						}}
					>
						<span></span>
					</BurgerButton>
					<StyledMenu
						isOpen={menuIsOpen}
						onClick={() => {
							setMenuIsOpen(false)
						}}
					>
						<Menu />
						<Social />
					</StyledMenu>
				</FlexWrapper>
			</Container>
		</StyledHeader>
	)
}

const StyledHeader = styled.header`
	padding: 67px 0 25px;
	@media ${theme.media.tablet} {
		padding: 25px 0 25px;
	}
`

const StyledMenu = styled.menu<{ isOpen: boolean }>`
	display: flex;
	align-items: center;
	gap: 50px;
	@media ${theme.media.tablet} {
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		z-index: 50;
		background-color: ${theme.colors.primaryBg};
		display: flex;
		flex-direction: column;
		gap: 80px;
		padding-top: 50px;
		transform: translateX(-100%);
		transition: transform 0.5s ease;
		${props =>
			props.isOpen &&
			css`
				transform: translateX(0%);
			`};
	}
`

const BurgerButton = styled.button<{ isOpen: boolean }>`
	display: none;
	width: 40px;
	height: 40px;
	position: relative;
	z-index: 55;

	span {
		position: relative;
		display: block;
		width: 32px;
		height: 2px;
		background: rgb(19, 176, 245);
		background: linear-gradient(
			90deg,
			rgba(19, 176, 245, 1),
			rgba(231, 15, 170, 1)
		);
	}
	span:after,
	span:before {
		content: '';
		position: absolute;
		left: 0;
		width: 32px;
		height: 2px;
		background: rgb(19, 176, 245);
		background: linear-gradient(
			90deg,
			rgba(19, 176, 245, 1),
			rgba(231, 15, 170, 1)
		);
	}
	span:after {
		top: 10px;
		transition: transform 0.3s ease;
	}
	span:before {
		bottom: 10px;
		transition: transform 0.3s ease;
	}

	${props =>
		props.isOpen &&
		css`
			span:after {
				top: 0;
				transform: rotate(405deg);
			}
			span {
				height: 0;
			}
			span:before {
				bottom: -1px;
				transform: rotate(315deg);
			}
		`}

	@media ${theme.media.tablet} {
		display: flex;
		align-items: center;
		justify-content: center;
	}
`
