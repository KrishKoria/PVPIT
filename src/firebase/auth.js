// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAEYXJ56HKY23RrQTVMUj119Cj0i3kn3pQ",
  authDomain: "signup-80455.firebaseapp.com",
  projectId: "signup-80455",
  storageBucket: "signup-80455.firebasestorage.app",
  messagingSenderId: "892738777831",
  appId: "1:892738777831:web:81e6ca3706e24d5b8ee842",
  measurementId: "G-DT7ZCLNWXB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth=getAuth(app);