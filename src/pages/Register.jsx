import React from 'react'
import Add from "../img/addimage.png"

const Register = () => {

  const handleSubmit = (e) =>{
    e.preventDefault(); // do not refresh the page 
    const displayName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const file = e.target[3].value;
  }


  return (
    <div>
      <div className='formContainer'>

        <div className='formWrapper'>
          <span className='logo'>Chat app</span>
          <span className='title'>Register</span>
          <form onSubmit={handleSubmit}>
            <input type="text" placeholder='display name'/>
            <input type="email" placeholder='email'/>
            <input type="password" placeholder='password'/>
            <input style={{display:"none"}} type='file' id='file'/>

            <label  htmlFor='file'>
              <img src={Add} alt="" />
              <span>Add an avatar</span>
            </label>
            <button>sign in</button>

          </form>
         <p> you do  have an account ? Login</p>
        </div>
      </div>
    </div>
  )
}

export default Register
