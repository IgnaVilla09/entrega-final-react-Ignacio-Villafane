import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

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

export const dataBase = getFirestore(app);
