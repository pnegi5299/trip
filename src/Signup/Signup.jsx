import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from "react-hook-form"


const Signup = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm()
    
      const onSubmit = (data) => console.log(data)
    
  return (
    <>
    <div>
        <div className='container' id='up'>
        <Link to="/">
       <b><i class="fa-regular fa-circle-xmark" id='ll'></i></b>
        </Link>
        <h3 id='z'>Signup</h3><br />    
        <form action="" onSubmit={handleSubmit(onSubmit)}>
        <label id='me'>Name

            <input type="text" placeholder='First name' className='fm'
               {...register("first name", { required: true })}
           /></label>
           {errors.email && 
                  <p id='err'>This field is required</p>}

           <br />
           <label id='me'>Last name

            <input type="text" placeholder='Last name' className='fm'
                {...register("Last name", { required: true })}
             /></label>
             {errors.email && 
                  <p id='err'>This field is required</p>}

             <br />
             <label id='me'>E-mail

            <input type="text" placeholder='enter a email' className='fm'
               {...register("email", { required: true })}

            /></label>
            {errors.email && 
                  <p id='err'>This field is required</p>}

            <br />
            <label id='me'>Password

            <input type="password" placeholder='password' className='fm'
               {...register("password", { required: true })}
             /></label>
             {errors.email && 
                  <p id='err'>This field is required</p>}

             <br />
                     <button type='submit' className='butt'>Signup</button>
          </form>
        <p> Have account?{""}
          <Link  to="/login">
          Login
          </Link>{" "}
        </p>
        </div>
    </div>
    </>

  )
}

export default Signup