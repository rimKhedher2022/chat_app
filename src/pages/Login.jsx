import React from 'react'
import { useNavigate } from "react-router-dom"
import { useState } from 'react';




const Login = () => {

  const [err, setErr] = useState(false) ; 
  const navigate = useNavigate();


  const handleSubmit = async(e) =>{
    e.preventDefault(); // do not refresh the page 
    const email = e.target[0].value;
    const password = e.target[1].value;
  


    try{
     

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
            

            <button>log in</button>

          </form>
        
        </div>
      </div>
    </div>
  )
}

export default Login

