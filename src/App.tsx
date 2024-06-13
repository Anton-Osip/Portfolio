import { Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import { Particle } from './components/particle/Particle'
import { Header } from './layout/header/Header'
import { About } from './layout/sections/about/About'
import { MailMe } from './layout/sections/mailMe/MailMe'
import { Main } from './layout/sections/main/Main'
import { Projects } from './layout/sections/projects/Projects'
import { Skills } from './layout/sections/skills/Skills'

function App() {
	return (
		<div className='App'>
			<Particle />

			<Header />
			<Routes>
				<Route path='/' element={<Navigate to={'/Portfolio/home'} />} />
				<Route
					path='/Portfolio'
					element={<Navigate to={'/Portfolio/home'} />}
				/>
				<Route path='/Portfolio/home' element={<Main />} />
				<Route path='/Portfolio/about' element={<About />} />
				<Route path='/Portfolio/skills' element={<Skills />} />
				<Route path='/Portfolio/projects' element={<Projects />} />
				<Route path='/Portfolio/contact' element={<MailMe />} />
			</Routes>
		</div>
	)
}

export default App
