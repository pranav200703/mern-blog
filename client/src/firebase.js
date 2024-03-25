// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-f4a89.firebaseapp.com",
  projectId: "mern-blog-f4a89",
  storageBucket: "mern-blog-f4a89.appspot.com",
  messagingSenderId: "784635564308",
  appId: "1:784635564308:web:ea29753d8b661a05eab201"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
