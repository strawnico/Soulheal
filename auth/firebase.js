import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCMTZQ47aLFzwwwm6Cw1jEySmALZnF5BYk",
  authDomain: "soulheal-auth.firebaseapp.com",
  projectId: "soulheal-auth",
  storageBucket: "soulheal-auth.appspot.com",
  messagingSenderId: "805638387052",
  appId: "1:805638387052:web:18e8a2677bfe8097206f49",
  measurementId: "G-L0Z3Y2Y3N4"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const analytics = getAnalytics(app);


export {app, auth, db, analytics};