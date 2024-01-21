// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE,
  authDomain: "blog-7afa6.firebaseapp.com",
  projectId: "blog-7afa6",
  storageBucket: "blog-7afa6.appspot.com",
  messagingSenderId: "401839823492",
  appId: "1:401839823492:web:6b70f2f843c66a60e940d1"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);