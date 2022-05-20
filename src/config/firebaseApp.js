import firebaseApp from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBd4JVfK90SGj0PUPs64JS7tdIvhu4NiBQ",
  authDomain: "viewinterior-bc51e.firebaseapp.com",
  projectId: "viewinterior-bc51e",
  storageBucket: "viewinterior-bc51e.appspot.com",
  messagingSenderId: "253940294914",
  appId: "1:253940294914:web:4c4cc04fd5408127d14e1b",
  measurementId: "G-YV65LB4MVL",
};

// Initialize Firebase

firebaseApp.initializeApp(firebaseConfig);

// firebaseApp.initializeApp(firebaseConfig);

export default firebaseApp;
