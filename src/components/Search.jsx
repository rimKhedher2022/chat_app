import React, { useContext } from 'react'
import { useState } from 'react'

import { collection, doc, getDoc, getDocs, query, serverTimestamp, setDoc, updateDoc, where } from "firebase/firestore";
import {db} from "../firebase"
import {AuthContext} from "../context/AuthContext"


const Search = () => {
  const [username,setUsername] = useState("") ; // for the input
  const [user,setUser] = useState(null) ; // the actual user
  const [err,setErr] = useState(false) ;
  const {currentUser} = useContext(AuthContext)
  

  const handleSearch = async () => {

// we use firebase query 

      const q = query(collection(db,"users"),
      where ("displayName","==",username));


try {
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
setUser(doc.data())
 
});
  
} catch (error) {
  setErr(true)
  
}

     

  };




  const handleKey = (e)=>{
    e.code ==="Enter" && handleSearch(); // if enter just search for user
  }

  const handleSelect = async() => {


    //create user chats 

    const combinedId = currentUser.uid > user.uid  
    ? currentUser.uid + user.uid 
    : user.id+currentUser.uid;

    try {
      const res = await getDoc(doc(db,"chats",combinedId));
//if res doesn t exist 
      if (!res.exists()){

        // create a chat in chats collection 
        await setDoc(doc(db,"chats",combinedId),{messages : []});

        // create user chats

       await updateDoc(doc(db,"userChats",currentUser.uid),{
        [combinedId+".userInfo"]:
        {
          uid:user.id,
          displayName:user.displayName,
          photoURL:user.photoURL

        },
        [combinedId+".date"]: serverTimestamp(),

       });

       await updateDoc(doc(db,"userChats",user.uid),{
        [combinedId+".userInfo"]:
        {
          uid:currentUser.id,
          displayName:currentUser.displayName,
          photoURL:currentUser.photoURL

        },
        [combinedId+".date"]: serverTimestamp(),

       });

      } 
      
    } catch (error) {
      
    }


setUser(null);
setUsername("")

  }



  return (
    <div className='search'>
        <div className="searchForm">
            <input type="text"  placeholder='find a user' onKeyDown={handleKey} 
            onChange={e => setUsername(e.target.value)} value={username}/>
            
        </div>
       
       {err && <div>User not found</div>}
       { user && <div className='userChat' onClick={handleSelect}>
                <img src= {user.photoURL} />
            <div className='userChatInfo'>
                <span>{user.displayName}</span>
            </div>


        </div>}


      
    </div>
  )
}

export default Search
