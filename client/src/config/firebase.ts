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
  apiKey: "AIzaSyAtsgWvDoaaDb6idkCcrvd1eIRsexOmHJQ",
  authDomain: "quester-13980.firebaseapp.com",
  projectId: "quester-13980",
  storageBucket: "quester-13980.appspot.com",
  messagingSenderId: "64423367436",
  appId: "1:64423367436:web:6a225a80a231884989af29",
  measurementId: "G-31L48QQXW8",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

export const auth = getAuth(app);

export const storage = getStorage(app);
