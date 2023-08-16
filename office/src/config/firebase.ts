// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "@firebase/storage";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB7m4H1jBYnMDERovliN6Kg2tLtCkgPBMg",
  authDomain: "steadee-pf.firebaseapp.com",
  databaseURL: "https://steadee-pf-default-rtdb.firebaseio.com",
  projectId: "steadee-pf",
  storageBucket: "steadee-pf.appspot.com",
  messagingSenderId: "252193488049",
  appId: "1:252193488049:web:bb355abfb7784665ba3690",
  measurementId: "G-38LX8J90ZE",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

export const auth = getAuth(app);

export const storage = getStorage(app);
