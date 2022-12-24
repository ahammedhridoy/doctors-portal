// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC6YEPeCVPFS1VDKw3FuaBbJR9ucb31FUs",
  authDomain: "doctorsportal-b89fe.firebaseapp.com",
  projectId: "doctorsportal-b89fe",
  storageBucket: "doctorsportal-b89fe.appspot.com",
  messagingSenderId: "718147896497",
  appId: "1:718147896497:web:a8693eef78b8facc370e90",
  measurementId: "G-DBRL6H6TX0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
