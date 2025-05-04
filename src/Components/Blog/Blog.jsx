import React,{useEffect} from 'react'
import './blog.css'

import { BsArrowRightShort } from "react-icons/bs";

import img from '../../assest/morocco.jpg'
import img2 from '../../assest/effile.jpg'
import img3 from '../../assest/tunisia2.jpg'
import img4 from '../../assest/ladakh2.jpg'

import Aos from 'aos'
import 'aos/dist/aos.css'

const Posts=[
  {
    id:1,
    postImage:img,
    title:'Beautiful Morocco, let us travel',
    desc:"The Kingdom of Morocco is a Muslim country in western Noprt Africa,with coasrlines on the Atlantic Ocean and Mediterranean Sea"
    
  },
  
  {
    id:2,
    postImage:img2,
    title:'Romantic moments under Eiffle Tower',
    desc:"with vast swaths of desert in its east and west and the rich Nile River Valley at its heart , is site to one of the world's earliest and greatest civilization "
  },

  {
    id:3,
    postImage:img3,
    title:'Let us have an adventure outside Tunisia',
    desc:'Tunisia is a small Arab country in North Africa that represents both the aspiration of freedom and struggles against terrorism that roll the region'
  },
  {
    id:4,
    postImage:img4,
    title:'Beautiful Ladakh, let us travel',
    desc:'Ladakh ("land of high passes") is a Union Territory in northern India. It is located between mountain range in the north and the main Himalayas to the south.  '
  }
]

const Blog = () => {



    useEffect(()=>{
      Aos.init({duration:2000})
   },[])

  return (
    <section className='blog container section'>
       <div className="secContainer">
        <div className="secIntro">
          <h2 data-aos="fade-up" data-aos-duration="2000" className="secTitle">
            Our Best Blog?
          </h2>
          <p data-aos="fade-up" data-aos-duration="2500">
            An insight to the incredible experience in the world.
          </p>
        </div>

        <div className="mainContainer grid">
         {
          Posts.map(({id,postImage,title,desc})=>{
            return(
                <div data-aos="fade-up" data-aos-duration="2000" className="singlePost grid">
                <div className="imgDiv">
                  <img src={postImage} alt={title} />
                </div>

                <div className="postDetails">
                  <h3 data-aos="fade-up" data-aos-duration="3000">
                    {title}
                  </h3>
                  <p data-aos="fade-up" data-aos-duration="4000">{desc}</p>
                </div>

                <a href="#" className='flex' data-aos="fade-up" data-aos-duration="4500">
                  Read More
                  <BsArrowRightShort className="icon" />
                </a>
                </div>

            )
          })
         }
        </div>
       </div>
    </section>
  )
}


export default Blog