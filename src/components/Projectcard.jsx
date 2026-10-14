import "./Projectcardstyle.css";
import React from 'react';
import Workcard from "./Workcard";
import ProjectData from "./Data";
import aboutimg from "../assets/abo1.jpg" 
const Projectcard = () => {
  return (
    <div className="container2">
      
        <div className="projects">
          <h1 className="project-heading1">My Projects</h1>
        <div className="project-container">
          {ProjectData.map((project,index)=>(
            <Workcard
            key={index}
            imgsrc={project.imgsrc}
            title={project.title}
            text={project.text}
            View={project.View}
            />
          ))}
       
        </div>
        </div>
        
    </div>
  )
}

export default Projectcard