import React from 'react'
import Navbar from './Navbar'
import Search from './Search'
import Chats from './Chats'

const Sidebar = () => { 
  return (
    <div>
      <div className="sidebar">
          <Navbar/> 
          <Search/>
          <Chats/>

      </div>
     
      
    </div>
  )
}

export default Sidebar
