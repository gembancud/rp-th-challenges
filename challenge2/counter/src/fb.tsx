// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { collection, getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD-A9WOyLVkTDbxS4KjCcKASe4eCdE7hcc",
  authDomain: "rp-counter-serverless.firebaseapp.com",
  projectId: "rp-counter-serverless",
  storageBucket: "rp-counter-serverless.appspot.com",
  messagingSenderId: "90674869741",
  appId: "1:90674869741:web:f833cbe54a0779405c23e4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

export const countersCollection = collection(db, "counters");
