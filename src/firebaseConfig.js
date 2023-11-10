// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDVl2AC3xzbRCGxSPvImGWyDyNHkncTIE4",
  authDomain: "pf-coder-reactjs-ivillafane.firebaseapp.com",
  projectId: "pf-coder-reactjs-ivillafane",
  storageBucket: "pf-coder-reactjs-ivillafane.appspot.com",
  messagingSenderId: "855130642382",
  appId: "1:855130642382:web:15f962e4118dd2da2b3d9f",
  measurementId: "G-RVRRHK3DY7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
