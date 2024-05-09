import { Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
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
			<Routes>
				<Route path='/' element={<Navigate to={'/home'} />} />
				<Route path='/home' element={<Main />} />
				<Route path='/about' element={<About />} />
				<Route path='/skills' element={<Skills />} />
				<Route path='/projects' element={<Projects />} />
				<Route path='/contact' element={<MailMe />} />
			</Routes>
		</div>
	)
}

export default App
