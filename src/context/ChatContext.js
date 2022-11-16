import { act } from "@testing-library/react";
import { onAuthStateChanged } from "firebase/auth";
import { createContext, useContext, useEffect, useState } from "react";
import {auth} from "../firebase"
import { AuthContext } from "./AuthContext";

export const ChatContext = createContext()


//Context Api :
// to access the user logged in 


// Chaque objet Context est livré avec un composant Provider React qui permet aux
// composants consommateurs de s'abonner aux changements de contexte.


export const ChatContextProvider = ({children}) =>{
    const {currentUser} = useContext(AuthContext)
    const INITIAL_STATE = {
        chatId:"null" ,
        user:{}


    }

    // The useReducer Hook is used to store and update states, 
    // just like the useState Hook. It accepts a reducer 
    // function as its first parameter and the initial state as the second.

    const chatReducer = (state,action) => { // state will take initialState
        switch(action.type){
            case "CHANGE_USER" : 

            return{
                user:action.payload,
                chatId:
                currentUser.uid > action.payload.uid  
                ? currentUser.uid + action.payload.uid 
                : action.payload.id + currentUser.uid

            };

            default :
            return state; 


        }

    }

 



        return (

        <AuthContext.Provider value={{currentUser}}>
            {children}
        </ AuthContext.Provider>
        );

}; // children = the component