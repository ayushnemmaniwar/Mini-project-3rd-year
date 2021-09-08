import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
var firebaseConfig = {
  apiKey: "AIzaSyD_DsjbKjpWdhlKH1zTRHZDh6OWS1H227s",
  authDomain: "mini-project-cf87c.firebaseapp.com",
  projectId: "mini-project-cf87c",
  storageBucket: "mini-project-cf87c.appspot.com",
  messagingSenderId: "784630527258",
  appId: "1:784630527258:web:aae6c878867abf657768a3",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();

export { db, auth };
