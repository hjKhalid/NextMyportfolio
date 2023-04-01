import Hero from './Hero'
import React from 'react'
import Navbar from './Navbar'
import Projects from './Projects'
const Portfolio = () => {
  return (
    <>
    <div>
        <Navbar/>
    </div>
    <div>
        <Hero/>
    </div>
    <div>
        <Projects/>
    </div>
    </>
  )
}

export default Portfolio