import emailjs from '@emailjs/browser'
import { ElementRef, useRef } from 'react'
import styled from 'styled-components'
import { Container } from '../../../components/Container'
import { font } from '../../../styles/Common'
import { theme } from '../../../styles/Theme'

export const MailMe: React.FC = () => {
	const form = useRef<ElementRef<'form'>>(null)

	const sendEmail = (e: any) => {
		e.preventDefault()
		if (!form.current) return
		emailjs
			.sendForm('service_gkw4h2q', 'template_9scf6wc', form.current, {
				publicKey: 'VMT00cW0vuf1D_gAh',
			})
			.then(
				() => {
					console.log('SUCCESS!')
				},
				error => {
					console.log('FAILED...', error.text)
				}
			)
		e.target.reset()
	}
	return (
		<StyledMailMe>
			<Container>
				<Form ref={form} onSubmit={sendEmail}>
					<Field>
						<Input
							required
							id='name'
							type='text'
							placeholder='Your name'
							name='user_name'
						/>
						<Label htmlFor='name'>Your name</Label>
					</Field>
					<Field>
						<Input
							required
							id='email'
							type='email'
							placeholder='Your email'
							name='user_email'
						/>
						<Label htmlFor='email'>Your email</Label>
					</Field>
					<Field>
						<Input
							required
							id='message'
							type='text'
							placeholder='Your message'
							name='user__message'
						/>
						<Label htmlFor='message'>Your message</Label>
					</Field>
					<Button>Submit</Button>
				</Form>
			</Container>
		</StyledMailMe>
	)
}

const StyledMailMe = styled.section`
	min-height: calc(100lvh - 157px);
	height: 100%;
	& > ${Container} {
		display: flex;
		align-items: center;
		justify-content: center;
	}

	@media ${theme.media.tablet} {
		min-height: calc(100lvh - 116px);
		padding: 30px 0;
	}
`
const Form = styled.form`
	max-width: 560px;
	width: 100%;
	display: flex;
	flex-direction: column;
	min-height: calc(100lvh - 157px);
	height: 100%;
	align-items: center;
	justify-content: space-around;
`
const Field = styled.div`
	width: 100%;
	position: relative;
`
const Label = styled.label`
	position: absolute;
	left: 15px;
	bottom: 15px;
	transition: ${theme.animations.transition};
	font-size: 24px;
`
const Input = styled.input`
	width: 100%;
	padding: 15px;
	border: none;
	border-bottom: 2px solid ${theme.colors.fontColor};
	font-size: 24px;
	background-color: transparent;
	/* linear-gradient(45deg, rgb(19, 176, 245), rgb(231, 15, 170)) */
	outline: none;
	color: ${theme.colors.fontColor};
	&::placeholder {
		opacity: 0;
	}
	&:focus-visible {
		border-bottom: 2px solid ${theme.colors.fontColor};
	}
	&:focus + ${Label}, &:not(:placeholder-shown) + ${Label} {
		transform: translateY(-38px);
		left: 0;
		font-size: 16px;
	}
`

const Button = styled.button`
	background-color: transparent;
	border: 2px solid ${theme.colors.fontColor};
	outline: none;
	padding: 5px 15px;
	color: ${theme.colors.fontColor};
	cursor: pointer;
	transition: ${theme.animations.transition};
	${font({ weight: 400, Fmax: 36, Fmin: 20 })}

	&:focus-visible {
		border: 2px solid ${theme.colors.fontColor};
	}

	&:hover {
		background-color: ${theme.colors.fontColor};
		color: ${theme.colors.primaryBg};
	}
`
