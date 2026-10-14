import React from 'react'
import NavBar from '../components/NavBar'
import Homepage from '../components/Homepage'
import Footer from '../components/Footer'
import Projectcard from '../components/Projectcard'
import Aboutpage from '../components/aboutpage'

const Home = () => {
  return (
    <div>
      <NavBar/>
      <Homepage/>
      <Aboutpage/>
      <Projectcard/>
      <Footer/>
    </div>
  )
}

export default Home