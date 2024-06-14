import styled from 'styled-components'
import { font } from '../../../styles/Common'
import { theme } from '../../../styles/Theme'

const Projects = styled.section`
	min-height: calc(100lvh - 157px);
	padding: 100px 0 50px;
	@media ${theme.media.tablet} {
		min-height: calc(100lvh - 116px);
		padding: 30px 0;
	}
`

const ProjectsWrapper = styled.section`
	margin-top: 50px;
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	grid-auto-rows: auto;
	gap: 60px;
	@media ${theme.media.tablet} {
		grid-template-columns: repeat(2, 1fr);
		gap: 40px;
	}
	@media ${theme.media.mobile} {
		grid-template-columns: repeat(1, 1fr);
		gap: 20px;
	}
`

const Project = styled.div`
	position: relative;
	z-index: 5;
	border-radius: 20px;
	box-shadow: 2px 2px 100px 0px rgba(0, 0, 0, 0.2);
	background: ${theme.colors.secondaryBg};
	overflow: hidden;
`
const Info = styled.div`
	padding: 25px;
	display: flex;
	gap: 25px;
	flex-direction: column;
	justify-content: space-between;
	@media ${theme.media.tablet} {
		padding: 15px;
	}
`
const Image = styled.img`
	aspect-ratio: 375/260;
	width: 100%;
	max-height: 260px;
	object-fit: cover;
`
const Title = styled.h4`
	${font({ weight: 500, lineHeight: 1.2, Fmax: 28, Fmin: 22 })}
	letter-spacing: 0px;
	text-align: center;
`
const Description = styled.p`
	${font({ weight: 300, lineHeight: 1.2, Fmax: 18, Fmin: 16 })}
	letter-spacing: 0px;
`
const Stack = styled.p`
	${font({ weight: 300, lineHeight: 1.2, Fmax: 14, Fmin: 14 })}
	letter-spacing: 0px;
`
const Link = styled.a`
	color: #ffffff;
	font-size: 16px;
	font-weight: 400;
	line-height: 26px;
	letter-spacing: 0px;
	text-align: left;
	text-decoration-line: underline;
	cursor: pointer;
	svg {
		margin-right: 12px;
	}
`

const LinksList = styled.div`
	display: flex;
	justify-content: space-between;
	flex-wrap: wrap;
`

export const S = {
	Projects,
	ProjectsWrapper,
	Project,
	Info,
	Image,
	Title,
	Description,
	Stack,
	LinksList,
	Link,
}
