import React from 'react'
import './footer.css'
import video1 from '../../Assets/video (2).mp4'
import { FiSend } from "react-icons/fi"
import { MdOutlineTravelExplore } from 'react-icons/md'
import { AiOutlineTwitter } from "react-icons/ai"
import { AiFillYoutube } from "react-icons/ai"
import { AiFillInstagram } from "react-icons/ai"
import { FaTripadvisor } from "react-icons/fa"
import { FiChevronRight } from "react-icons/fi"

const Footer = () => {
  return (
    <section className="footer">
      <div className="videoDiv">
        <video src={video1} loop autoPlay muted type="video/mp4"></video>
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

        <div className="footerCard flex">
          <div className="footerIntro flex">
            <div className="logoDiv">
              <a href="#" className="logo flex">
              <MdOutlineTravelExplore className='icon'/> Trippy
              </a>
            </div>

            <div className="footerParagraph">
            Sign up to get marketing emails from Trippy, including promotions, rewards, travel experiences and information about Trippy’s and Trippy Transport Limited’s products and services.
            </div>

            <div className="foorterSocials flex">
            <AiOutlineTwitter className='icon'/>
            <AiFillYoutube className='icon'/> 
            <AiFillInstagram className='icon'/>
            <FaTripadvisor className='icon'/>
            </div>
          </div>

          <div className="footerLinks grid">

            {/* Group One */}
            <div className="linkGroup">
              <span className="groupTitle">
                OUR AGENCY
              </span>

              <li className="footerList flex">
              <FiChevronRight className='icon'/>
              Services
              </li>

              <li className="footerList flex">
              <FiChevronRight className='icon'/>
              Insurance
              </li>

              <li className="footerList flex">
              <FiChevronRight className='icon'/>
              Agency
              </li>

              <li className="footerList flex">
              <FiChevronRight className='icon'/>
              Tourism
              </li>

              <li className="footerList flex">
              <FiChevronRight className='icon'/>
              Payment
              </li>
            </div>

            {/* Group Two */}
            <div className="linkGroup">
              <span className="groupTitle">
                PARTNERS
              </span>

              <li className="footerList flex">
              <FiChevronRight className='icon'/>
              Bookings
              </li>

              <li className="footerList flex">
              <FiChevronRight className='icon'/>
              RentCars
              </li>

              <li className="footerList flex">
              <FiChevronRight className='icon'/>
              HostelWorld
              </li>

              <li className="footerList flex">
              <FiChevronRight className='icon'/>
              Trivago
              </li>

              <li className="footerList flex">
              <FiChevronRight className='icon'/>
              TripAdvisor
              </li>
            </div>

            {/* Group Three */}
            <div className="linkGroup">
              <span className="groupTitle">
                LAST MIUTE
              </span>

              <li className="footerList flex">
              <FiChevronRight className='icon'/>
              Ella
              </li>

              <li className="footerList flex">
              <FiChevronRight className='icon'/>
              Nuwara Eliya
              </li>

              <li className="footerList flex">
              <FiChevronRight className='icon'/>
              Mirissa
              </li>

              <li className="footerList flex">
              <FiChevronRight className='icon'/>
              Kandy
              </li>

              <li className="footerList flex">
              <FiChevronRight className='icon'/>
              Tricomalee
              </li>
            </div>
          </div>

          <div className="footerDiv flex">
            <small>BEST TRAVEL WEBSITE THEME</small>
            <small>COPYRIGHTS RESERVED - UDARIADHIKARAM 
              2024</small>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Footer