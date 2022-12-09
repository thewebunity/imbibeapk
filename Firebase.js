import { initializeApp } from "firebase/app";


const firebaseConfig = {
  apiKey: "AIzaSyCTEnCwG8LB-oAzlcA6seboE4zNOAX0sDI",
  authDomain: "registration-f1a32.firebaseapp.com",
  databaseURL: "https://registration-f1a32-default-rtdb.firebaseio.com",
  projectId: "registration-f1a32",
  storageBucket: "registration-f1a32.appspot.com",
  messagingSenderId: "818748543164",
  appId: "1:818748543164:web:ecaad968243716edb380b9",
  measurementId: "G-E9HY4F5MVP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


export default app;
