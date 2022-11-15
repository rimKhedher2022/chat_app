import { signOut } from 'firebase/auth'
import React from 'react'
import { auth } from '../firebase'

const Navbar = () => {
  return (
    <div className="navbar">
      <span className="logo"> Chat </span>
      <div className="user">
        <img src="https://i11.haber7.net//haber/haber7/photos/2020/53/Ues00_1609399241_7764.jpg"  alt=''/>
        <span>jhon</span>
        <button onClick = {()=>signOut(auth)}> logout </button> 
        {/* signOut : function from firebase */}
      </div>
    </div>
  )
}

export default Navbar