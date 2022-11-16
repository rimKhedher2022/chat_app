import React from 'react'
import { Link, useNavigate } from "react-router-dom"
import { useState } from 'react';
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../firebase';




const Login = () => {

  // hala@gmail.com
  // 123456789

  const [err, setErr] = useState(false) ; 
  const navigate = useNavigate();


  const handleSubmit = async(e) =>{
    e.preventDefault(); // do not refresh the page 
    const email = e.target[0].value;
    const password = e.target[1].value;
  


    try{
       await signInWithEmailAndPassword(auth, email, password)
       navigate("/")

    }catch (err){

      setErr(true) ; 

    }

 

  }
  return (
    <div>
      <div className='formContainer'>

        <div className='formWrapper'>
          <span className='logo'>Chat app</span>
          <span className='title'>Login</span>
          <form onSubmit={handleSubmit}>
           
            <input type="email" placeholder='email'/>
         

            <input type="password" placeholder='password'/>
            

            <button>sign in</button>
            {err && <span>sth went wrong</span>}

          </form>

          <p> you don't  have an account ? <Link to="/register">register</Link></p>
        
        </div>
      </div>
    </div>
  )
}

export default Login

