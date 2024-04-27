import styled from 'styled-components'

export default function Menu() {
	return (
		<StyledMenu>
			<ul>
				<li>
					<a href='#a'>Home</a>
				</li>
				<li>
					<a href='#a'>About</a>
				</li>
				<li>
					<a href='#a'>Tech Stack</a>
				</li>
				<li>
					<a href='#a'>Projects</a>
				</li>
				<li>
					<a href='#a'>Contact</a>
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
