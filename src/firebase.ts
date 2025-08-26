// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAVHLR-qLWGzg-ymwe4VUZKsHyIoJjjGWs",
  authDomain: "scholar-d2312.firebaseapp.com",
  projectId: "scholar-d2312",
  storageBucket: "scholar-d2312.firebasestorage.app",
  messagingSenderId: "153256392113",
  appId: "1:153256392113:web:09250019dd5d3a5f6db990"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);