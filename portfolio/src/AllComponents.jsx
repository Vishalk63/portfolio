import React from 'react'
import Navbar from './components/Navbar'
import  Home  from './pages/Home'
import About from './pages/About'
import Skill from './pages/Skill'
import Contact from './pages/Contact'
import Projects from './pages/Projects'

function AllComponents() {
  return (
    <div className='font-playwrite bg-[url("https://i.pinimg.com/736x/42/2e/c8/422ec8ac96a7e19836c85c2e7a103dd0.jpg")] bg-fixed bg-cover'>
    <Navbar/>
    <Home/>
    <About/>
    <Skill/>
    <Projects/>
    <Contact/>
    </div>
  )
}

export default AllComponents