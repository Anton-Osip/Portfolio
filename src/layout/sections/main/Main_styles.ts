import styled from 'styled-components'
import abstract from '../../../assets/image/abstract.svg'
import { font } from '../../../styles/Common'
import { theme } from '../../../styles/Theme'
import { FlexWrapper } from './../../../components/FlexWrapper'

const Main = styled.section`
	min-height: calc(100lvh - 157px);
	display: flex;
	background-image: url(${abstract});
	background-repeat: no-repeat;
	background-position: right center;

	@media ${theme.media.tablet} {
		min-height: calc(100lvh - 116px);
		background-position: center bottom;
		padding: 25px 0;

		${FlexWrapper} {
			height: calc(100lvh - 116px);
		}
	}
`
const TitleWrapper = styled.div`
	max-width: 505px;
	margin-bottom: 25px;
	@media ${theme.media.tablet} {
		max-width: 100%;
		width: 100%;
		text-align: center;
	}
`
const Text = styled.p`
	${font({
		lineHeight: 1.2,
		weight: 700,
		Fmax: 58,
		Fmin: 32,
	})}

	letter-spacing: -1px;
	color: ${theme.colors.mainTitleColor};
`

const MainTitle = styled.h1`
	${font({
		lineHeight: 1.2,
		weight: 700,
		Fmax: 58,
		Fmin: 32,
	})}

	letter-spacing: -1px;
	color: ${theme.colors.mainTitleColor};
	white-space: nowrap;
	background: linear-gradient(45deg, rgb(19, 176, 245), rgb(231, 15, 170));
	background-clip: text;
	-webkit-text-fill-color: transparent;
	color: rgb(217, 217, 217);
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
		top: -10px;
		left: -10px;
		width: 345px;
		height: 345px;
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
	width: 325px;
	height: 325px;
	object-fit: cover;
	border-radius: 50%;
	filter: contrast(100%);
	@media ${theme.media.mobile} {
		width: 282px;
		height: 282px;
	}
`
export const S = { Main, TitleWrapper, Photo, PhotoWrapper, MainTitle, Text }
