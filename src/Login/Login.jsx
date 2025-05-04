import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from "react-hook-form"
import './login.css'


const Login = ({onClose}) => {
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
    <h4 id='zz'><b>Login Form</b>

    </h4><br />
    <form action=""onSubmit={handleSubmit(onSubmit)} >

        <label id='me'>E-mail</label>
        <input type="text" placeholder='enter a email' className='fm'
         {...register("email", { required: true })}
        />
              {errors.email && 
              <p id='err'>This field is required</p>}

        <label id='me'>&nbsp;&nbsp;Password</label>
        <input type="password" placeholder='password' className='fm'
         {...register("password", { required: true })}
        />
              {errors.password && 
              <p id='err'>This field is required</p>}

        <br />
        <button type='submit' className='butt'  onClick={onClose}>Login </button>

    </form>
    <p> Have account?{""}
      <Link  to="/signup">
      Signup
      </Link>{" "}
    </p>
    </div>
</div>
</>

  )
}

export default Login