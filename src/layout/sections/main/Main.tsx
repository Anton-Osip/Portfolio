import Typewriter from 'typewriter-effect'
import photo from '../../../assets/image/photo.webp'
import { Container } from '../../../components/Container'
import { FlexWrapper } from '../../../components/FlexWrapper'
import { S } from './Main_styles'

export function Main() {
	return (
		<S.Main>
			<Container>
				<FlexWrapper align='center' justify='space-between' wrap='wrap'>
					<S.TitleWrapper>
						<S.Text>Hi 👋, My name is</S.Text>
						<S.MainTitle>
							<Typewriter
								options={{
									strings: ['Osipchyk AV', ''],
									autoStart: true,
									loop: true,
								}}
							/>
						</S.MainTitle>
						<S.Text>A Web Developer.</S.Text>
					</S.TitleWrapper>
					<S.PhotoWrapper>
						<S.Photo src={photo} alt='photo' />
					</S.PhotoWrapper>
				</FlexWrapper>
			</Container>
		</S.Main>
	)
}
