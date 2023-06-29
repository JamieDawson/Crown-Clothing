// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: "crwn-clothing-db-dff47.firebaseapp.com",
  projectId: "crwn-clothing-db-dff47",
  storageBucket: "crwn-clothing-db-dff47.appspot.com",
  messagingSenderId: "598718897497",
  appId: "1:598718897497:web:bedc2424cf2110b40d4048",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
