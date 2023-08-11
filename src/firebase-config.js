// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/Auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAqwVhe9PFYopAbjEWdxPhAVtkXNi41ask",
  authDomain: "chatapp-5a053.firebaseapp.com",
  projectId: "chatapp-5a053",
  storageBucket: "chatapp-5a053.appspot.com",
  messagingSenderId: "441805620241",
  appId: "1:441805620241:web:28d863d3725580c0291db0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
