import { NavLink } from 'react-router-dom'
import logo from '../../assets/image/logo.svg'

export function Logo() {
	return (
		<NavLink to={'/home'}>
			<img src={logo} alt='logo' />
		</NavLink>
	)
}
