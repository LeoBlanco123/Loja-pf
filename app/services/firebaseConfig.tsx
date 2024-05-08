import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCS7hHFElP2cYFePNt0wTGscAB5FKDhra0",
  authDomain: "loja-pf.firebaseapp.com",
  projectId: "loja-pf",
  storageBucket: "loja-pf.appspot.com",
  messagingSenderId: "799014075516",
  appId: "1:799014075516:web:61ca8174e1eea540cf9df9"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export {app, db, getFirestore, collection, addDoc}