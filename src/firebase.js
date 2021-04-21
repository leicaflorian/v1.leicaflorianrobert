import firebase from "firebase/app";
import "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBFOrRlIoLXIce8vcilkWT5n9N4h822dPI",
  authDomain: "my-website-c4333.firebaseapp.com",
  projectId: "my-website-c4333",
  storageBucket: "my-website-c4333.appspot.com",
  messagingSenderId: "40834544910",
  appId: "1:40834544910:web:debc80df44356c2259935f",
  measurementId: "G-R8K0FDQQJ4"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
