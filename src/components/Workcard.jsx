import "./Projectcardstyle.css"
import React from 'react'
import { NavLink } from "react-router-dom"

const Workcard = ({imgsrc,text,title,View}) => {
  return (
    
        <div className="project-card">
            <img src={imgsrc} alt="image"/>
            <h2 className="project-tittle">{title}</h2>
            <div className="project-details">
                <p>{text}</p>
                <div className="proj-btns">
                    <NavLink to ={View} className="btn">View</NavLink>
                    <NavLink to ={View}className="btn">Source</NavLink>

                </div>
            </div>
        </div>
    
  )
}

export default Workcard