import React from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import Page from '../components/Page'
import AboutContent from '../components/AboutContent'

const About = () => {
  return (
    <div>
      <NavBar />
      <Page heading ="ABOUT." text="I'm friendly full stack developer"/>
      <AboutContent />
      <Footer />

    </div>
  )
}

export default About