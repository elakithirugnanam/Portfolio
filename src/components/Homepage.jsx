import "./Homepagestyle.css"
import React from 'react'
import introImage from "../assets/intrimg.jpg"
import { Link } from "react-router-dom"

function Homepage() {
  return (
    <div className="page">
        {/* <div className="img1">
         <img className="introimg" src={introImage} alt="IntroImage"/>
         </div> */}
         <div className="content">
            <p> Hi I am a Full Stack Developer</p>
            <h1>MERN Developer</h1>
            <div className="btns">
              <Link to ="/Projects" className="btn">Projects</Link>
              <Link to ="/Contact" className="btn">Contact</Link>
            </div>
            
         </div>
         
         
    </div>
  )
}

export default Homepage