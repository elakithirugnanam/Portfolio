import "./Projectcardstyle.css";
import React from 'react';
import Workcard from "./Workcard";
import ProjectData from "./Data";
import aboutimg from "../assets/abo1.jpg" 
const Aboutpage = () => {
  return (
    <div className="container2">
      <div className="about-container">
            <div className="col1">
              <h3>About <span>Me</span></h3>
              <p> Hi, I'm Dhinesh — a passionate Full Stack MERN Developer who loves turning complex problems into simple, beautiful, and intuitive solutions. With a strong foundation in MongoDB, Express.js, React, and Node.js, I build scalable web applications that not only look great but also perform flawlessly.

</p>
            </div>
            <div className="col2">
              <img src={aboutimg} alt="" />
              <div className="box1"></div>
              <div className="box2"></div>
            </div>
        </div>
        </div>
        )
}

export default Aboutpage