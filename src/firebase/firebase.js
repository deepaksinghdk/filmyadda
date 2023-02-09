// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore, collection} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDUIIGiVK6yt7rb5cF0wAjFm8ECGg6KfsM",
  authDomain: "filmyadda-fcb88.firebaseapp.com",
  projectId: "filmyadda-fcb88",
  storageBucket: "filmyadda-fcb88.appspot.com",
  messagingSenderId: "499819437462",
  appId: "1:499819437462:web:718e64760952e7073711b7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const movieRef = collection(db , "movies") ;
export const reviewsRef = collection(db, "reviews");
export const usersRef = collection(db, "users");

export default app; 