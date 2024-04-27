import styled from 'styled-components'
import { Icon } from '../icon/Icon'

export default function Social() {
	return (
		<StyledSocial>
			<li>
				<a href='#dfg'>
					<Icon
						iconId='githubIcon'
						width='30'
						height='30'
						viewBox='0 0 30 30'
					/>
				</a>
			</li>
			<li>
				<a href='#dfg'>
					<Icon iconId='twIcon' width='30' height='30' viewBox='0 0 30 30' />
				</a>
			</li>
			<li>
				<a href='#dfg'>
					<Icon iconId='inIcon' width='30' height='30' viewBox='0 0 30 30' />
				</a>
			</li>
		</StyledSocial>
	)
}

const StyledSocial = styled.ul`
	display: flex;
	gap: 20px;
`
