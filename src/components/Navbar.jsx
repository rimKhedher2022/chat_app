import React from 'react'

const Navbar = () => {
  return (
    <div className="navbar">
      <span className="logo"> Chat </span>
      <div className="user">
        <img src="https://i11.haber7.net//haber/haber7/photos/2020/53/Ues00_1609399241_7764.jpg"  alt=''/>
        <span>jhon</span>
        <button>logout</button>
      </div>
    </div>
  )
}

export default Navbar