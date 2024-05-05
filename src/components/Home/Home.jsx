import React from 'react'
import './home.css'
import video from '../../Assets/video2.mp4'
import { GrLocation } from 'react-icons/gr'

const Home = () => {
  return (
    <section className='home'>
      <div className="overlay"></div>
      <video src={video} muted autoPlay loop type="video2/mp4"></video>
    
      <div className="homeContent container">
        <div className='textDiv'>

          <span className='smallText'>
            Our Packages
          </span>

          <h1 className='homeTitle'>
            Search your Holiday
          </h1>

        </div>

        <div className="cardDiv grid">
          <div className="destinationInput">
            <label htmlFor="city">Search your destination:</label>
            <div className="input flex">
              <input type="text" placeholder='Enter name here....'/>
              <GrLocation className='icon'/>
            </div>
            </div>

            <div className="dateInput">
            <label htmlFor="date">Select your date:</label>
            <div className="input flex">
              <input type="date"/>
              </div>
            </div>

            <div className="priceInput">
              <div className='lable_total flex'>
                <label htmlFor='price'>Max price:</label>
                <h3 className='total'>LKR 10,000</h3>
              </div>
                <div className='input flex'>
                  <input type="range" max="10000"
                  min="5000"/>
                </div>
            </div>
          </div>
      </div>

    
    </section>
  )
}

export default Home