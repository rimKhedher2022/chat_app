
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";



const firebaseConfig = {
  apiKey: "AIzaSyBMu-OvVdL_wn6aDUCiLpwE39buwKTzg6E",
  authDomain: "chating-application-2aae9.firebaseapp.com",
  projectId: "chating-application-2aae9",
  storageBucket: "chating-application-2aae9.appspot.com",
  messagingSenderId: "103189279864",
  appId: "1:103189279864:web:59757f474ab9ed7c5ee98d",
  measurementId: "G-RME5BQNSPP"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();


