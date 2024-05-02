import styled from 'styled-components'
import { FlexWrapper } from '../../../components/FlexWrapper'
import { Icon } from '../../../components/icon/Icon'
import { Social } from '../../../components/social/Social'

export function FooterTop() {
	return (
		<StyledFooterTop>
			<Icon iconId='logo' width='97' height='58' viewBox='0 0 97 58' />
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
`
const StyledLink = styled.a``
