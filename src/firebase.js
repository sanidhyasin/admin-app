import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "tutorial-79392.firebaseapp.com",
  projectId: "tutorial-79392",
  storageBucket: "tutorial-79392.appspot.com",
  messagingSenderId: "970319186723",
  appId: "1:970319186723:web:1330919c85c2915f8d9a96",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth()

