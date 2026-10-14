import "./Pagestyle.css";
import React from 'react'

const Page = (props) => {
  return (
    <>
    <div className="page">
        <div className="heading">
            <h1>{props.heading}</h1>
            <p>{props.text}</p>
        </div>
    </div>
    
    </>
  )
}

export default Page