import styled from 'styled-components'
import { Icon } from '../icon/Icon'

export function Social() {
	return (
		<StyledSocial>
			<li>
				<a href='#dfg'>
					<Icon
						iconId='githubIcon'
						width='30'
						height='30'
						viewBox='0 0 30 30'
						color='#666666'
					/>
				</a>
			</li>
			<li>
				<a href='#dfg'>
					<Icon
						iconId='twitterIcon'
						width='30'
						height='30'
						viewBox='0 0 30 30'
						color='#666666'
					/>
				</a>
			</li>
			<li>
				<a href='#dfg'>
					<Icon
						iconId='linkedinIcon'
						width='30'
						height='30'
						viewBox='0 0 30 30'
						color='#666666'
					/>
				</a>
			</li>
		</StyledSocial>
	)
}

const StyledSocial = styled.ul`
	display: flex;
	gap: 20px;
`
