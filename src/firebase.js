// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBO9aZhUObaLWbVvek2LVtp2SqhRs3BgvQ",
  authDomain: "whole-project-e7885.firebaseapp.com",
  projectId: "whole-project-e7885",
  storageBucket: "whole-project-e7885.appspot.com",
  messagingSenderId: "456138216937",
  appId: "1:456138216937:web:1e3ad0575bb099113ce778",
  measurementId: "G-7BJCZYT5BZ",
  databaseURL:"https://whole-project-e7885-default-rtdb.firebaseio.com/"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();

export default app;