import React from 'react'
import Add from "../img/addimage.png"
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import {auth , storage , db} from "../firebase"
import { useState } from 'react';
import {  ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore"; 
import { useNavigate } from "react-router-dom"



const Register = () => {
  // The setState (setErr ) function is used to update the state. 
// It accepts a new state value and enqueues a re-render of the component.
  const [err, setErr] = useState(false) ; 
  const navigate = useNavigate


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

      await setDoc(doc(db,"users" ,res.user.uid), {
        uid:res.user.uid,
        displayName,
        email,
        photoURL: downloadURL,
    
    })
      await setDoc(doc(db,"userChats" ,res.user.uid), {})
       navigate("/") // after success of registration take me to home page 
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
