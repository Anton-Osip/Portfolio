import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

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
`
