import React from 'react'
import './app.css'
import Navbar from './Components/Navbar/Navbar'
import Home from './Components/Home/Home'
import Popular from './Components/Popular/Popular'
import Offer from './Components/Offers/Offer'
import About from './Components/About/About'
import Blog from './Components/Blog/Blog'
import Footer from './Components/Footer/Footer'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Product from './Components/Product/Product'
import { BiLogIn } from 'react-icons/bi'
import Login from './Login/Login'
import Signup from './Signup/Signup'







const App = () => {

  return (
    <>
    <BrowserRouter>
    <Navbar></Navbar>
 {/*    <Home></Home>
    <Popular></Popular>
    <Offer></Offer>
    <About></About>
    <Blog></Blog>
    <Footer></Footer> */}

    <Routes>
    <Route  path='/' element=
    {<React.Fragment>
         
          <Home></Home>
          <Popular></Popular>
          <Offer></Offer>
          <About></About>
          <Blog></Blog>
          <Footer></Footer>
          </React.Fragment>} />
        
          <Route exact path='/product' element={<Product></Product>} />
 
      <Route exact path='/login' element={<Login></Login>} />
      <Route exact path='/signup' element={<Signup></Signup>} />

  
     
       </Routes>
    </BrowserRouter>
    </>
  )
  
}

export default App