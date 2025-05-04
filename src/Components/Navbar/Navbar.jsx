import React ,{useState} from 'react'
import './navbar.css'
import { MdTravelExplore } from "react-icons/md";
import { AiFillCloseCircle } from "react-icons/ai";
import { TbGridDots } from "react-icons/tb";
import { Link } from 'react-router-dom';

const Navbar = () => {
//code to toggle/show navBAr
const[active , setActive] =useState('navBar')
const showNav =()=>{
  setActive('navBar activeNavbar')
}
// code to remove Navbar
const removeNav =()=>{
setActive('navBar')
}

//Code to add background color to the header....
const[transparent,setTransparent]=useState('header')
const addBg=()=>{
  if(window.scrollY>=10){
     setTransparent('header activeHeader')
  }
  else{
    setTransparent('header')
  }
}
window.addEventListener('scroll',addBg)

  return (
    <section className='navBarSection'>
    <div className={transparent}>

         <div className='logoDiv '>
           <a href='#' className='logo'>
             <h1 className='flex'><MdTravelExplore className="icon" />
             Dot
             </h1>
           </a>
         </div>

        <div className={active}>
           <ul className="navLists flex">

             <li className="navItem">
               <Link href="#" to="/" className="navLink">Home</Link>
              </li>

              <li className="navItem">
               <Link href="#" className="navLink" to="/product">Products</Link>
              </li>

           <li className="navItem">
               <a href="#" className="navLink">Resources</a>
           </li>

           <li className="navItem">
               <a href="#" className="navLink">Contacts</a>
           </li>

           <li className="navItem">
               <a href="#" className="navLink">Blog</a>
           </li>

          <div className="headerBtns flex">
          <button className='btn loginBtn'>
               <Link href="#" to="/login">Login</Link>
           </button>
            
           <button className='btn'>
               <Link href="#" to="/signup">Sign Up</Link>
           </button>
           </div> 
          
         </ul>

         <div onClick={removeNav} className="closeNavbar">
         <AiFillCloseCircle className="icon" />
         </div>
      </div> 

      <div onClick={showNav} className="toggleNavbar">
      <TbGridDots className="icon"/>
      </div>
    </div>
    </section>
  )
}

export default Navbar