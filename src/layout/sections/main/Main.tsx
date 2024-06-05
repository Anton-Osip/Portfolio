import styled from 'styled-components'
import abstract from '../../../assets/image/abstract.svg'
import photo from '../../../assets/image/photo.jpg'
import { Container } from '../../../components/Container'
import { FlexWrapper } from '../../../components/FlexWrapper'
import { theme } from '../../../styles/Theme'

export function Main() {
	return (
		<StyledMain>
			<Container>
				<FlexWrapper align='center' justify='space-between' wrap='wrap'>
					<MainTitle>
						Hi 👋, My name is
						<span> Osipchyk AV</span> I build things for web
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
	min-height: calc(100lvh - 157px);
	display: flex;
	background-image: url(${abstract});
	background-repeat: no-repeat;
	background-position: right center;

	@media ${theme.media.tablet} {
		min-height: calc(100lvh - 116px);
		background-position: center bottom;
	}
`

const MainTitle = styled.h1`
	max-width: 505px;
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
	@media ${theme.media.tablet} {
		max-width: 100%;
		text-align: center;
	}
	@media ${theme.media.mobile} {
		font-size: 38px;
		line-height: 45px;
	}
`

const PhotoWrapper = styled.div`
	position: relative;
	@media ${theme.media.tablet} {
		margin: 0 auto;
	}

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
		@media ${theme.media.mobile} {
			width: 300px;
			height: 300px;
		}
	}
`
const Photo = styled.img`
	position: relative;
	z-index: 5;
	width: 349px;
	height: 349px;
	object-fit: cover;
	border-radius: 50%;
	filter: contrast(100%);
	@media ${theme.media.mobile} {
		width: 282px;
		height: 282px;
	}
`
