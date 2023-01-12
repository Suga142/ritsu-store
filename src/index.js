import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';
import App from './App';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB9k1va3TGrZNNHJ3zLfgRDHTmRJKqEUl0",
  authDomain: "ritsu-store.firebaseapp.com",
  projectId: "ritsu-store",
  storageBucket: "ritsu-store.appspot.com",
  messagingSenderId: "926512559226",
  appId: "1:926512559226:web:69ceb2ac053bb7906af7c3"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

