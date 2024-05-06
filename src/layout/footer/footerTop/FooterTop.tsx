import styled from 'styled-components'
import { FlexWrapper } from '../../../components/FlexWrapper'
import { Icon } from '../../../components/icon/Icon'
import { Social } from '../../../components/social/Social'
import { theme } from '../../../styles/Theme'

export function FooterTop() {
	return (
		<StyledFooterTop>
			<Icon iconId='logoIcon' width='97' height='58' viewBox='0 0 97 58' />
			<FlexWrapper align='center' gap='45'>
				<StyledLink href='tel:+911234509876'>+91 12345 09876</StyledLink>
				<StyledLink href='mailto:info@example.com'>info@example.com</StyledLink>
				<Social />
			</FlexWrapper>
		</StyledFooterTop>
	)
}

const StyledFooterTop = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding-bottom: 42px;
	border-bottom: 2px solid rgba(66, 68, 110, 0.3);
`
const StyledLink = styled.a`
	color: ${theme.colors.accentColor};
	font-family: DM Sans;
	font-size: 18px;
	font-weight: 400;
	line-height: 26px;
	letter-spacing: 0px;
`
