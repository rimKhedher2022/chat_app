import { onAuthStateChanged } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import {auth} from "../firebase"

export const AuthContext = createContext()
//Context Api :
// to access the user logged in 


// Chaque objet Context est livré avec un composant Provider React qui permet aux
// composants consommateurs de s'abonner aux changements de contexte.

export const AuthContextProvider = ({children}) =>{

 

    

        return (

        <AuthContext.Provider value={{currentUser}}>
            {children}
        </ AuthContext.Provider>
        );

}; // children = the component