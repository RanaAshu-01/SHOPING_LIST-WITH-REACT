import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBXLuBzReeeGxN3j4_M0aRD5L6hgU2T_w0",
  authDomain: "my-project-c81c4.firebaseapp.com",
  projectId: "my-project-c81c4",
  storageBucket: "my-project-c81c4.firebasestorage.app",
  messagingSenderId: "1080849586761",
  appId: "1:1080849586761:web:fdc459dc3a0d9dc478fd98",
  measurementId: "G-NNZZFWLY15"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);