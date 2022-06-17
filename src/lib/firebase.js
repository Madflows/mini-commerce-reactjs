// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBRU3cCo_vUF5Hs2lTCm5PgIpuHwrF82sc",
  authDomain: "mini-commerce.firebaseapp.com",
  projectId: "mini-commerce",
  storageBucket: "mini-commerce.appspot.com",
  messagingSenderId: "1090250577965",
  appId: "1:1090250577965:web:ac9b604fb01b058489c0a4",
  measurementId: "G-0FCMSXC3XR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
