import React from 'react'
import './footer.css'
import video2 from '../../Assets/video (2).mp4'
import { FiSend } from "react-icons/fi"

const Footer = () => {
  return (
    <section className="footer">
      <div className="videoDiv">
        <video src={video2} loop autoPlay muted type="video/mp4"></video>
      </div>

      <div className="secContent container">
        <div className="contactDiv flex">
          <div className="text">
            <small>KEEP IN Touch</small>
            <h2>Travel With Us</h2>
          </div>

          <div className="inputDiv flex">
            <input type="text" placeholder='Enter Email Address'/>
            <button className="btn flex" type='submit'>
                SEND <FiSend className="icon"/>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Footer