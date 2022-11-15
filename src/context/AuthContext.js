import { onAuthStateChanged } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import {auth} from "../firebase"

export const AuthContext = createContext()
//Context Api :
// to access the user logged in 


// Chaque objet Context est livré avec un composant Provider React qui permet aux
// composants consommateurs de s'abonner aux changements de contexte.

export const AuthContextProvider = ({children}) =>{

  const [currentUser,setCurrentUser] = useState({}) // setCurrentUser to update the user 


//   In most scenarios using Authentication, 
//   you will want to know whether your users are currently 
//   signed-in or signed-out of your application. 
//   The module provides a method called onAuthStateChanged 
//   which allows you to subscribe to the users current 
//   authentication state, and receive an event whenever that state changes.


useEffect(()=>{
    onAuthStateChanged(auth,(user) =>{
        setCurrentUser(user);
        console.log(user)
    });
},[]);

// the component (children) can reach current user
<AuthContext.Provider value={currentUser}>
    {children}
</ AuthContext.Provider>

}; // children = the component