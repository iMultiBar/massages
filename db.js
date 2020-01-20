import firebase from "firebase/app";
import "firebase/firestore";

// Initialize Cloud Firestore through Firebase
firebase.initializeApp({
  apiKey: "AIzaSyDHRwmXeXKa9lGxKJtySdIdSgJDZAVolaM",
  authDomain: "messagesbyfahd.firebaseapp.com",
  databaseURL: "https://messagesbyfahd.firebaseio.com",
  projectId: "messagesbyfahd",
  storageBucket: "messagesbyfahd.appspot.com",
  messagingSenderId: "846894519106",
  appId: "1:846894519106:web:0dec2d6c2b6b6b2a89aedb",
  measurementId: "G-7T2RCBTBJ1"
});

export default firebase.firestore();
