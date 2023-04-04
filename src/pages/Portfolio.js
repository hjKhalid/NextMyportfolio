import Hero from './Hero'
import React from 'react'
import Navbar from './Navbar'
import Projects from './Projects'
import Technologies from './Technologies'
import AdditionalSkill from './AdditionalSkill'
import About from './About'
import Footer from './Footer'
const Portfolio = () => {
  return (
    <>
    <div>
        <Navbar/>
    </div>
    <div>
        <Hero/>
    </div>
    <div id='sectionProject'>
        <Projects/>
    </div > 
    <div id="sectionTechnologies">
      <Technologies/>
    </div>
    <div>
      <AdditionalSkill/>
    </div>
    <div id='sectionAboutme'>
      <About/>
    </div>
    <div>
      <Footer/>
    </div>
    </>
  )
}

export default Portfolio