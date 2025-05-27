// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore, doc, setDoc } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDGb2259t3AccbzQAeJtR8PiRtzNsk4Exk",
  authDomain: "finance-tracker-c8c95.firebaseapp.com",
  projectId: "finance-tracker-c8c95",
  storageBucket: "finance-tracker-c8c95.appspot.com",
  messagingSenderId: "629743407339",
  appId: "1:629743407339:web:618fd709f2264ed3f1aeae",
  measurementId: "G-2GJHFYFDHJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export { db, auth, provider, doc, setDoc };
