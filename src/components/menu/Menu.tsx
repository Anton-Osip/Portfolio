import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { theme } from '../../styles/Theme'

export function Menu() {
	return (
		<StyledMenu>
			<ul>
				<li>
					<NavLink to={'/home'}>Home</NavLink>
				</li>
				<li>
					<NavLink to={'/about'}>About</NavLink>
				</li>
				<li>
					<NavLink to={'/skills'}>Tech Stack</NavLink>
				</li>
				<li>
					<NavLink to={'/projects'}>Projects</NavLink>
				</li>
				<li>
					<NavLink to={'/contact'}>Contact</NavLink>
				</li>
			</ul>
		</StyledMenu>
	)
}

const StyledMenu = styled.nav`
	ul {
		display: flex;
		gap: 50px;
	}

	a {
		color: ${theme.colors.accentColor};
		font-family: DM Sans;
		font-size: 20px;
		font-weight: 500;
		line-height: 26px;
		letter-spacing: 0px;
	}

	a:hover,
	a.active {
		color: ${theme.colors.mainTitleColor};
	}
`
