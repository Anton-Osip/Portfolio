import styled from 'styled-components'
import { theme } from '../../styles/Theme'
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
						color='#a7a7a7'
					/>
				</a>
			</li>
			<li>
				<a href='#dfg'>
					<Icon
						iconId='twitterIcon'
						width='32'
						height='32'
						viewBox='0 0 32 32'
						color='#a7a7a7'
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
						color='#a7a7a7'
					/>
				</a>
			</li>
		</StyledSocial>
	)
}

const StyledSocial = styled.ul`
	display: flex;
	gap: 20px;
	a:hover use {
		fill: ${theme.colors.mainTitleColor};
	}
`
