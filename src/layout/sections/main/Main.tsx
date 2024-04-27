import styled from 'styled-components'
import photo from '../../../assets/image/photo.png'
import { FlexWrapper } from '../../../components/FlexWrapper'
export function Main() {
	return (
		<StyledMain>
			<FlexWrapper align='center' justify='space-between'>
				<MainTitle>
					Hi 👋,
					<br /> My name is <br />
					<span>Pavan MG</span> <br />I build things for web
				</MainTitle>
				<Photo src={photo} alt='photo' />
			</FlexWrapper>
		</StyledMain>
	)
}

const MainTitle = styled.h1``

const StyledMain = styled.div`
	background-color: #f59d9d;
	min-height: 100lvh;
`

const Photo = styled.img`
	width: 349px;
	height: 349px;
	object-fit: cover;
	border-radius: 50%;
	border: 9px solid #9198e5;
`
