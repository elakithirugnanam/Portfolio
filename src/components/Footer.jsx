import "./Footerstyle.css"
import React from 'react'
import{ FaGithub, FaGitSquare, FaHome, FaInstagram, FaLinkedinIn, FaMailBulk, FaPhone } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
        <div className=" footer-top-content"> 
            <div className="location">
                <h4> No.1/154(32), Rs Puram, Perumanallur, Tirupur - 641666.</h4>
            </div>
        </div>
        <div className=" footer-middle-content"> 
                <h4>+91 7305229222 | dhineshkumar.1462@gmail.com</h4>
        </div>
        <div className=" footer-bottom-content"> 
            <div className="social">
                <FaInstagram size={30} style={{color:"#fff",marginRight:"1rem"}} className="icon" />
                <FaLinkedinIn size={30} style={{color:"#fff",marginRight:"1rem"}} className="icon" />
                <FaGithub size={30} style={{color:"#fff",marginRight:"1rem"}} className="icon" />
            </div>
        </div>
        
    </div>
    
  )
}

export default Footer