// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "mern-blog-2c25b.firebaseapp.com",
  projectId: "mern-blog-2c25b",
  storageBucket: "mern-blog-2c25b.appspot.com",
  messagingSenderId: "505670019893",
  appId: "1:505670019893:web:73d13eace0489a287b7a7c",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
