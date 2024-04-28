import './App.css'
import { Footer } from './layout/footer/Footer'
import { Header } from './layout/header/Header'
import { About } from './layout/sections/about/About'
import { MailMe } from './layout/sections/mailMe/MailMe'
import { Main } from './layout/sections/main/Main'
import { Projects } from './layout/sections/projects/Projects'
import { Skills } from './layout/sections/skills/Skills'

function App() {
	return (
		<div className='App'>
			<Header />
			<Main />
			<About />
			<Skills />
			<Projects />
			<MailMe />
			<Footer />
		</div>
	)
}

export default App
