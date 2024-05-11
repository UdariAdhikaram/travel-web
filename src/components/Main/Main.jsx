import React, {useEffect} from 'react'
import './main.css' 
import img1 from '../../Assets/img (1).jpeg'
import img2 from '../../Assets/img (2).jpeg'
import img3 from '../../Assets/img (3).jpg' 
import img4 from '../../Assets/img (4).jpg'
import img5 from '../../Assets/img (5).jpg'
import img6 from '../../Assets/Img (6).jpg'
import img7 from '../../Assets/img (7).jpg'
import img8 from '../../Assets/img (8).webp'
import img9 from '../../Assets/img (9).webp'
import img10 from '../../Assets/img (10).jpeg'

import Aos from 'aos'
import 'aos/dist/aos.css'

import { HiOutlineLocationMarker } from "react-icons/hi"
import { HiOutlineClipboardCheck } from "react-icons/hi"

const Data = [
  {
    id:1,
    imgSrc: img1,
    destTitle: 'Nine Arche Bridge',
    location: 'Ella',
    grade: 'CULTURE RELAX',
    fees: 'LKR20000',
    description: 'The Nine Arch Bridge is one of the most photographed places in Sri Lanka – but that’s because it is just so beautiful! The bridge towers above a gorge full of tea fields and makes for the perfect place to visit in Sri Lanka to take your next favorite travel photo.'
  },

  {
    id:2,
    imgSrc: img2,
    destTitle: 'Sigiriya Rock Fortress',
    location: 'Sigiriya',
    grade: 'CULTURE RELAX',
    fees: 'LKR30000',
    description: 'Sigiriya Rock is one of the most popular places to visit in all of Sri Lanka. In fact, many visitors make the trip to Sigiriya purely to see this ancient fortress.' 
  },

    
    {
    id:3,
    imgSrc: img3,
    destTitle: 'Mirissa Beach',
    location: 'Mirissa',
    grade: 'CULTURE RELAX',
    fees: 'LKR25000',
    description: 'Mirissa Beach is a beautiful spot located in a small village between Galle and Matara on the south coast of Sri Lanka' 
       },

    {
    id:4,
    imgSrc: img4,
    destTitle: 'Sembuwaththa lake',
    location: 'Matele',
    grade: 'CULTURE RELAX',
    fees: 'LKR28000',
    description: 'Sembuwaththa Lake offers a mesmerizing view with its vast expanse of deep blue water, surrounded by misty mountains and tea gardens.It’s an ideal place to let your thoughts wander as you reflect on your journey through Sri Lanka.'    
  },

   {
    id:5,
    imgSrc: img5,
    destTitle: 'Jaffna Fort',
    location: 'Jaffna',
    grade: 'CULTURE RELAX',
    fees: 'LKR10000',
    description: 'f you’re in the northern tip of Sri Lanka, spend a few days enjoying the sights and sounds of Jaffna, which is off the main tourist track'
       },

    {
    id:6,
    imgSrc: img6,
    destTitle: 'Liptons Seat',
    location: 'Haputhale',
    grade: 'CULTURE RELAX',
    fees: 'LKR28000',
    description: 'One of the most beautiful places I visited in Sri Lanka was Lipton’s Seat. The morning we visited, we got up very early so we could visit the viewpoint during sunrise, and it was stunning!'
        },

    {
    id:7,
    imgSrc: img7,
    destTitle: 'Kandy',
    location: 'Kandy',
    grade: 'CULTURE RELAX',
    fees: 'LKR23000',
    description: 'Located in Sri Lanka’s cultural center, Kandy is a city that many tourists visit. Kandy used to be the capital city of the Sri Lankan royal dynasty and holds much cultural significance. '
      },

    {
    id:8,
    imgSrc: img8,
    destTitle: 'Dambulla Cave Temples',
    location: 'Dambulla',
    grade: 'CULTURE RELAX',
    fees: 'LKR18000',
    description: 'If you’re only going to visit one temple in Sri Lanka, then it needs to be the Dambulla Cave Temples. Not only do these temples have religious and historical significance, but they are both beautiful and unique.'
       },

   {
    id:9,
    imgSrc: img9,
    destTitle: 'Little Adam’s Peak',
    location: 'Ella',
    grade: 'CULTURE RELAX',
    fees: 'LKR35000',
    description: 'For those who aren’t ambitious enough to tackle the real Adam’s Peak, Little Adams Peak in Ella is the perfect alternative.'
        },

    {
    id:10,
    imgSrc: img10,
    destTitle: 'Marble Beach',
    location: 'Trincomalee',
    grade: 'CULTURE RELAX',
    fees: 'LKR45000',
    description: 'Marble Beach, also known as Saliara Beach, is a seaside gem located within a small isolated bay.Enjoy your visit to this stunning coastal paradise!'    },

]

export const Main = () => {
  //create a react hook to add a scroll animation..
  useEffect(()=>{
  Aos.init({duration: 2000})
  }, [])

  return (
    <section className='main container section'>
      <div className="secTitle">
        <h3 data-aos="fade-right" className="title">
            Most visited destinations
        </h3>
      </div>

      <div className="secContent grid">
        {
            Data.map(({id, imgSrc, destTitle, location, grade, fees, description}) =>{
                  return(
                      <div key={id} 
                      data-aos="fade-up"
                      className="singleDestination">

                          <div className='imageDiv'>
                            <img src={imgSrc} alt= {destTitle} />
                          </div>

                          <div className="cardInfo">
                            <h4 className="destTitle">{destTitle}</h4>
                            <span className='content flex'>
                            <HiOutlineLocationMarker className='icon'/>
                            <span className='name'>{location}</span>
                            </span>

                            <div className="fees flex">
                              <div className="grade">
                                <span>{grade}<small>+1</small></span>
                              </div>
                              <div className="price">
                                <h5>{fees}</h5>
                              </div>
                            </div>

                            <div className="desc">
                              <p>{description}</p>
                            </div>

                            <button className='btn flex'>
                              DETAILS <HiOutlineClipboardCheck className='icon'/>
                            </button>
                          </div>
                      </div>
                  )
              })
        }

      </div>
    </section>
  )
}

export default Main 