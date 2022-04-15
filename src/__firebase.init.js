// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD3v4KhagkjUeONKZQwO1iT84LttsqZ3dQ",
  authDomain: "red-onion-cf5ef.firebaseapp.com",
  projectId: "red-onion-cf5ef",
  storageBucket: "red-onion-cf5ef.appspot.com",
  messagingSenderId: "37411708169",
  appId: "1:37411708169:web:33ea76b5ecbb4145ad07d8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;