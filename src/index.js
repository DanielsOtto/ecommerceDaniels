import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/styles.scss';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBrVstfUy6OQ-X_BXmM5SwTKfCLA_MN9BQ",
  authDomain: "latiendita-daniels.firebaseapp.com",
  projectId: "latiendita-daniels",
  storageBucket: "latiendita-daniels.appspot.com",
  messagingSenderId: "1094960872354",
  appId: "1:1094960872354:web:81e18d77396eb472dc90fb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <App />
  </React.StrictMode>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
