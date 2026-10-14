import { Link } from "react-router-dom";
import "./AboutContent.css";
import React from 'react';
import abo1 from "../assets/abo1.jpg";
import abo2 from "../assets/abo2.jpg";
import { width } from "@fortawesome/free-solid-svg-icons/fa0";

const AboutContent = () => {
  return (
    <>
    
    <div className="about">
        <div className="col1">
            <h1>About Me</h1>
            <p className="para">I'm a passionate Full-Stack Developer with a strong foundation in the MERN stack (MongoDB, Express.js, React.js, and Node.js). I love transforming ideas into sleek, scalable, and performance-driven web applications. From crafting pixel-perfect interfaces to architecting robust backend systems, I thrive on building tech that solves real-world problems.With hands-on experience in developing end-to-end solutions, I’ve worked on projects ranging from e-commerce platforms to social media apps. I embrace best practices in clean code, API design, responsive layouts.</p>
            <h1  className="sub-head">What I Do</h1>
            <div className="boxes">
            <div className="box">
              <img src = {abo1} className="img" alt="aboutimge"/>
              <h3>Frontend Development</h3>
              <p>Crafting responsive, dynamic UIs with React, Redux, and modern JavaScript (ES6+). I care deeply about user experience, accessibility, and performance.</p>
            </div>
            <div className="box">
              <img src = {abo1} className="img" alt="aboutimge"/>
              <h3>Backend Development</h3>
              <p>Designing and implementing secure, scalable server-side applications using Node.js, Express.js, and integrating MongoDB databases.</p>
            </div>
            <div className="box">
              <img src = {abo1} className="img" alt="aboutimge"/>
              <h3>API Integration & Development</h3>
              <p>Building and consuming RESTful APIs and integrating third-party services such as payment gateways, email services, and cloud storage.</p>
            </div>
            <div className="box">
              <img src = {abo1} className="img" alt="aboutimge"  />
              <h3>DevOps & Deployment</h3>
              <p>Familiar with Docker, Git, CI/CD, and deploying apps to platforms like Heroku, Vercel, Netlify.</p>
            </div>
            </div>
            

        </div>
        </div>
        <div>
        
    </div>
    </>
  )
}

export default AboutContent