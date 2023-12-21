// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-auth-5aeed.firebaseapp.com",
  projectId: "mern-auth-5aeed",
  storageBucket: "mern-auth-5aeed.appspot.com",
  messagingSenderId: "72384448104",
  appId: "1:72384448104:web:6f66f58d8c53475052dddd"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);