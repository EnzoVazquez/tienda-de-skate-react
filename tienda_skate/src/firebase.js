// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getFirestore} from 'firebase/firestore';
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAzGVW16GcteALdMMDBreDQOZA9MeqSC1U",
  authDomain: "tienda-skate.firebaseapp.com",
  projectId: "tienda-skate",
  storageBucket: "tienda-skate.appspot.com",
  messagingSenderId: "134347594549",
  appId: "1:134347594549:web:82e02840f94c86bb6e4a7c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const baseDatos = getFirestore(app);