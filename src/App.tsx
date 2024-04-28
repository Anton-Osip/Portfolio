import './App.css'
import { Header } from './layout/header/Header'
import { MailMe } from './layout/sections/mailMe/MailMe'
import { Main } from './layout/sections/main/Main'
import Projects from './layout/sections/projects/Projects'
import { Skills } from './layout/sections/skills/Skills'

function App() {
	return (
		<div className='App'>
			<Header />
			<Main />
			<Skills />
			<Projects />
			<MailMe />
		</div>
	)
}

export default App
