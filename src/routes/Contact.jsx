import React from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import Page from '../components/Page'
import Form from '../components/Form'

const Contact = () => {
  return (
    <div>
      <NavBar />
      <Page heading ="CONTACT." text ="Let's Connect"/>
      <Form />
      <Footer />
    </div>
  )
}

export default Contact