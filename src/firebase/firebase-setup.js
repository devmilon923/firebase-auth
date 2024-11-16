// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBpSkiIQDlp_TY3iIJFUksr6-ZhLdulhyQ",
  authDomain: "review-auth-5bf02.firebaseapp.com",
  projectId: "review-auth-5bf02",
  storageBucket: "review-auth-5bf02.firebasestorage.app",
  messagingSenderId: "238968810890",
  appId: "1:238968810890:web:8ad6b3da28e043b484ac73",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
