// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore, doc, setDoc } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyADAlolLMT4s_bS7Zpa3KaTwzpsZZsyMY4",
  authDomain: "personalfinancetrackerreactapp.firebaseapp.com",
  projectId: "personalfinancetrackerreactapp",
  storageBucket: "personalfinancetrackerreactapp.appspot.com",
  messagingSenderId: "936808586103",
  appId: "1:936808586103:web:4d844945d1941d3cae5f72",
  measurementId: "G-J10BLX4606"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export { db, auth, provider, doc, setDoc };