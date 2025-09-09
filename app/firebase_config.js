// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from 'firebase/database';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDZbcQF23EwL3smFeWifHxIUjX6IgbFOXs",
  authDomain: "portfolio-a03ea.firebaseapp.com",
  databaseURL: "https://portfolio-a03ea-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "portfolio-a03ea",
  storageBucket: "portfolio-a03ea.firebasestorage.app",
  messagingSenderId: "756949297461",
  appId: "1:756949297461:web:315ef8d9b53944a64dc47c",
  measurementId: "G-407X1XQ6Y8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

// Solusi: hanya jalankan getAnalytics jika ada window (client-side)
if (typeof window !== 'undefined') {
  // const analytics = getAnalytics(app); // ✅ Opsional, boleh diaktifkan jika kamu butuh
}
export { database };