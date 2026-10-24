console.log("Ali - Firebase file is running!");

import { initializeApp } from "https://www.gstatic.com/firebasejs/12.5.0/firebase-app.js"; 
import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  doc
} from "https://www.gstatic.com/firebasejs/12.5.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyAdJns-ljAhh4kuW1Fa9H5MZ7nPD7PvOuE",
  authDomain: "lord-a6165.firebaseapp.com",
  projectId: "lord-a6165",
  storageBucket: "lord-a6165.firebasestorage.app",
  messagingSenderId: "1011007184593",
  appId: "1:1011007184593:web:cdedfa3b544e268ea6aff0",
  measurementId: "G-9HPTVV2LJ0"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { app, db, collection, addDoc, getDocs, deleteDoc, doc };