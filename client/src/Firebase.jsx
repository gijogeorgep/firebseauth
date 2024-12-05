// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBTKUvAb6VwDGuIA3sz_otE9xvfDgydiII",
  authDomain: "reactfirebase-fb3aa.firebaseapp.com",
  projectId: "reactfirebase-fb3aa",
  storageBucket: "reactfirebase-fb3aa.firebasestorage.app",
  messagingSenderId: "771372876219",
  appId: "1:771372876219:web:72466c53d64d0022f0849e",
  measurementId: "G-5PRF7VY7QZ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const db = getFirestore(app);
