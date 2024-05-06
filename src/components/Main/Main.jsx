import React from 'react'
import './main.css' 
import img from '../../Assets/img (1).jpg'
import { HiOutlineLocationMarker } from "react-icons/hi"

const Data = [
  {
    id:1,
    imgSrc: nine_arche,
    destTitle: 'Nine Arche Bridge',
    location: 'Ella',
    grade: 'CULTURE RELAX',
    fees: 'LKR20000',
    description: 'The Nine Arch Bridge is one of the most photographed places in Sri Lanka – but that’s because it is just so beautiful! The bridge towers above a gorge full of tea fields and makes for the perfect place to visit in Sri Lanka to take your next favorite travel photo.'
  },

 /* {
    id:2,
    imgSrc: sigiri,
    destTitle: 'Sigiriya Rock Fortress',
    location: 'Sigiriya',
    grade: 'CULTURE RELAX',
    fees: 'LKR30000',
    description: 'Sigiriya Rock is one of the most popular places to visit in all of Sri Lanka. In fact, many visitors make the trip to Sigiriya purely to see this ancient fortress.' 
  },

  {
    id:3,
    imgSrc: mirissa,
    destTitle: 'Coconut Tree Hill',
    location: 'Mirissa',
    grade: 'CULTURE RELAX',
    fees: 'LKR25000',
    description: 'Coconut Tree Hill is a lateritic headland in Mirissa, Sri Lanka located adjacent to the Indian Ocean. It is a popular tourist destination in the country and is located at a headland with a coconut plantation. Coconut Tree Hill, despite being located on privately owned lands, is one of the most Instagrammed locations in Sri Lanka.'
      },

    {
    id:4,
    imgSrc: mirissa1,
    destTitle: 'Mirissa Beach',
    location: 'Mirissa',
    grade: 'CULTURE RELAX',
    fees: 'LKR25000',
    description: 'Mirissa Beach is a beautiful spot located in a small village between Galle and Matara on the south coast of Sri Lanka' 
       },

    {
    id:5,
    imgSrc: jafna,
    destTitle: 'Coconut Tree HillJaffna, for Temples, Forts and Markets',
    location: 'Jaffna',
    grade: 'CULTURE RELAX',
    fees: 'LKR10000',
    description: 'f you’re in the northern tip of Sri Lanka, spend a few days enjoying the sights and sounds of Jaffna, which is off the main tourist track'
       },

    {
    id:6,
    imgSrc: lipton,
    destTitle: 'Liptons Seat',
    location: 'Mirissa',
    grade: 'CULTURE RELAX',
    fees: 'LKR28000',
    description: 'One of the most beautiful places I visited in Sri Lanka was Lipton’s Seat. The morning we visited, we got up very early so we could visit the viewpoint during sunrise, and it was stunning!'
        },

    {
    id:7,
    imgSrc: daladamaligava,
    destTitle: 'Kandy',
    location: 'Kandy',
    grade: 'CULTURE RELAX',
    fees: 'LKR23000',
    description: 'Located in Sri Lanka’s cultural center, Kandy is a city that many tourists visit. Kandy used to be the capital city of the Sri Lankan royal dynasty and holds much cultural significance. '
      },

    {
    id:8,
    imgSrc: dambulla,
    destTitle: 'Dambulla Cave Temples',
    location: 'Dambulla',
    grade: 'CULTURE RELAX',
    fees: 'LKR18000',
    description: 'If you’re only going to visit one temple in Sri Lanka, then it needs to be the Dambulla Cave Temples. Not only do these temples have religious and historical significance, but they are both beautiful and unique.'
       },

   {
    id:9,
    imgSrc: litteladaspeack,
    destTitle: 'Little Adam’s Peak',
    location: 'Ella',
    grade: 'CULTURE RELAX',
    fees: 'LKR35000',
    description: 'For those who aren’t ambitious enough to tackle the real Adam’s Peak, Little Adams Peak in Ella is the perfect alternative.'
        },

    {
    id:10,
    imgSrc: adamspeak,
    destTitle: 'Adams Peak',
    location: 'Nallathanniya',
    grade: 'CULTURE RELAX',
    fees: 'LKR45000',
    description: 'Adam’s Peak is arguably one of the most important cultural places to the Sri Lankan people. To them, it’s a pilgrimage of high religious significance and it’s quickly become a must-see among visitors.'      
    },
*/ 
]

export const Main = () => {
  return (
    <section className='main container section'>
      <div className="secTitle">
        <h3 className="title">
            Most visited destinations
        </h3>
      </div>

      <div className="secContent grid">
        {
            Data.map(({id, imgSrc, destTitle, location, grade, fees, description}) =>{
                  return(
                      <div key={id} className="dingleDestination">

                          <div className='imageDiv'>
                            <img src={imgSrc} alt= {destTitle} />
                          </div>

                          <div className="cardInfo">
                            <h4 className="destTitle">{destTitle}</h4>
                            <span className='content flex'>
                            <HiOutlineLocationMarker className='icon'/>
                            <span ></span>
                            </span>
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