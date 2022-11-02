import React from 'react'
import Add from "../img/addimage.png"

const Login = () => {
  return (
    <div>
      <div className='formContainer'>

        <div className='formWrapper'>
          <span className='logo'>Chat app</span>
          <span className='title'>Login</span>
          <form>
           
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

