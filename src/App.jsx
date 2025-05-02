import React from 'react'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import Features from './Components/Features'
import Designer from './Components/Designer'
import AmazingWork from './Components/AmazingWork'
import SkillSection from './Components/SkillSection'
import ServicesSection from './Components/ServicesSection'


const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Features/>
      <Designer/>
      <AmazingWork/>
      <SkillSection/>
      <ServicesSection/>
    </div>
  )
}

export default App