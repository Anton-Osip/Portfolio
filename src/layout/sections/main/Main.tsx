import styled from 'styled-components'
import abstract from '../../../assets/image/abstract.svg'
import photo from '../../../assets/image/photo.png'
import { Container } from '../../../components/Container'
import { FlexWrapper } from '../../../components/FlexWrapper'
import { theme } from '../../../styles/Theme'

export function Main() {
	return (
		<StyledMain>
			<Container>
				<FlexWrapper align='center' justify='space-between'>
					<MainTitle>
						Hi 👋,
						<br /> My name is <br />
						<span>Pavan MG</span> <br />I build things for web
					</MainTitle>
					<PhotoWrapper>
						<Photo src={photo} alt='photo' />
					</PhotoWrapper>
				</FlexWrapper>
			</Container>
		</StyledMain>
	)
}
const StyledMain = styled.section`
	min-height: 100lvh;
	display: flex;
	background-image: url(${abstract});
	background-repeat: no-repeat;
	background-position: right center;
`

const MainTitle = styled.h1`
	font-size: 58px;
	font-weight: 700;
	line-height: 70px;
	letter-spacing: -1px;
	color: ${theme.colors.mainTitleColor};
	span {
		background: linear-gradient(45deg, rgb(19, 176, 245), rgb(231, 15, 170));
		background-clip: text;
		-webkit-text-fill-color: transparent;
		color: rgb(217, 217, 217);
	}
`

const PhotoWrapper = styled.div`
	position: relative;

	&::before {
		z-index: 5;
		content: '';
		position: absolute;
		top: -9px;
		left: -9px;
		width: 367px;
		height: 367px;
		border-radius: 50%;
		background: linear-gradient(rgb(231, 15, 170), rgb(19, 176, 245));
	}
`
const Photo = styled.img`
	width: 349px;
	height: 349px;
	object-fit: cover;
	border-radius: 50%;
	position: relative;
	z-index: 5;
`
