import React from 'react'
import Add from "../img/addimage.png"
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import {auth , storage} from "../firebase"
import { useState } from 'react';
import {  ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

const Register = () => {
  const [err, setErr] = useState(false) ; 

  const handleSubmit = async(e) =>{

   
    e.preventDefault(); // do not refresh the page 
    const displayName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const file = e.target[3].files[0];


    try{
      const res = await  createUserWithEmailAndPassword(auth, email, password)
     


const storageRef = ref(storage, displayName);

const uploadTask = uploadBytesResumable(storageRef, file);

// Register three observers:
// 1. 'state_changed' observer, called any time the state changes
// 2. Error observer, called on failure
// 3. Completion observer, called on successful completion
uploadTask.on(

 
  (error) => {
    setErr(true) ; 
   
  }, 
  () => {
   
    getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
      await  updateProfile(res.user,{
        displayName,
        photoURL:downloadURL,


      });
    });
  }
);
  



    }catch (err){

      setErr(true) ; 

    }

 

  }


  return (
    <div>
      <div className='formContainer'>

        <div className='formWrapper'>
          <span className='logo'>Chat app</span>
          <span className='title'>Register</span>
          <form onSubmit={handleSubmit}>
            <input type="text" placeholder='display name' />
            <input type="email" placeholder='email'/>
            <input type="password" placeholder='password'/>
            <input style={{display:"none"}} type='file' id='file'/>

            <label  htmlFor='file'>
              <img src={Add} alt="" />
              <span>Add an avatar</span>
            </label>
            <button>sign in</button>
            {err && <span>sth went wrong</span>}

          </form>
         <p> you do  have an account ? Login</p>
        </div>
      </div>
    </div>
  )
}

export default Register
