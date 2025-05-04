import React,{useEffect} from 'react'
import './offer.css'
import { MdKingBed } from "react-icons/md";
import { MdBathtub } from "react-icons/md";
import { FaWifi } from "react-icons/fa";
import { MdAirportShuttle } from "react-icons/md";
import { MdLocationOn } from "react-icons/md";
import { BsArrowRightShort } from "react-icons/bs";

import img8 from '../../assest/hotel1.jpg'
import img6 from '../../assest/hotel2.jpg'
import img7 from '../../assest/hotel3.jpg'

import Aos from 'aos'
import 'aos/dist/aos.css'

const offer =[
  {
    id:1,
    imgSrc:img8,
    stTdeitle:'Machu Picchu',
    location:'Peru',
    price:'$7,452'
  },
  
  {
    id:2,
    imgSrc:img6,
    stTdeitle:'Guanajuato',
    location:'Mexico',
    price:'$2,452'
  },

  {
    id:3,
    imgSrc:img7,
    stTdeitle:'Angkor Wat',
    location:'Cambodia',
    price:'$4,400'
  },


]

const Offer = () => {

  useEffect(()=>{
    Aos.init({duration:2000})
 },[])

  return (
   <section className='offer container section'>
      <div className="secContainer">

        <div data-aos="fade-up" data-aos-duration="2000" className="secIntro">
          <h2 className="secTitle">
             Special Offers
          </h2>
          <p>
            From historical cities to natural specteculars, come
            see the best of the world!
          </p>
        </div>

        <div className="mainContent grid">

          {
            offer.map(({id,imgSrc,stTdeitle,location,price})=>{
              return(
           <div data-aos="fade-up" data-aos-duration="3000" className="singleOffer">
             <div className="destImage">
                 <img src={imgSrc} alt={stTdeitle} />

                 <span className="discount">
                    30% off
                 </span>
             </div>

              <div className="offerBody">
                 <div className="price flex">
                   <h4>
                    {price}
                   </h4>
                   <span className="status">
                    For Rent
                   </span>
                 </div>

                 <div className="amenities flex">
                   <div className="singleAmenity flex">
                       <MdKingBed className='icon'/>
                       <small>2 Beds</small>
                   </div>
                   <div className="singleAmenity flex">
                       <MdBathtub className='icon'/>
                       <small>1 Bath</small>
                   </div>
                   <div className="singleAmenity flex">
                       <FaWifi  className='icon'/>
                       <small>Wi-Fi</small>
                   </div>
                   <div className="singleAmenity flex">
                       <MdAirportShuttle
                       className='icon'/>
                       <small>Shuttle</small>
                   </div>
                 </div>

                 <div className="location flex">
                         <MdLocationOn className='icon' />
                         <small>450 Vine #310, {location}</small>
                 </div>

                 <button className="btn flex">
                  View Detail
                  <BsArrowRightShort className='icon'/>
                 </button>
              </div>

           </div>

              )
            })
          }


        </div>
      </div>
   </section>
  )
}

export default Offer