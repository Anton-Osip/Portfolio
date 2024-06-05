import styled from 'styled-components'
import { theme } from '../../styles/Theme'
import { Icon } from '../icon/Icon'

export function Social() {
	return (
		<StyledSocial>
			<li>
				<a
					target='_blank'
					rel='noreferrer'
					href='https://github.com/Anton-Osip'
				>
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
				<a
					target='_blank'
					rel='noreferrer'
					href='https://www.linkedin.com/in/%D0%B0%D0%BD%D1%82%D0%BE%D0%BD-%D0%BE%D1%81%D0%B8%D0%BF%D1%87%D0%B8%D0%BA-729784216/'
				>
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
