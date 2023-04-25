// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAO0zv1QEUjQMPZ56ILlNqXfkgsaaD5Z9E",
  authDomain: "crudtest-d21c0.firebaseapp.com",
  databaseURL: "https://crudtest-d21c0-default-rtdb.firebaseio.com",
  projectId: "crudtest-d21c0",
  storageBucket: "crudtest-d21c0.appspot.com",
  messagingSenderId: "579569564001",
  appId: "1:579569564001:web:bd7180e6ce91c7f7742d20",
  measurementId: "G-V7BRDKPJ88"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);