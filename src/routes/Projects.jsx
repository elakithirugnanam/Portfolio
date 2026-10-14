import React from 'react'
import NavBar from '../components/NavBar'
import Page from '../components/Page'
import Footer from '../components/Footer'
import Projectcard from '../components/Projectcard'

const Projects = () => {
  return (
    <div>
      <NavBar />
      <Page  heading="PROJECTS." text="Works of my Projects"/>

      <Projectcard />
      <Footer />
      
    </div>
  )
}

export default Projects