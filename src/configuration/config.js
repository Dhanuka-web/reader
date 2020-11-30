// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
import firebase from "firebase/app";

// Add the Firebase services that you want to use
import "firebase/auth";
import "firebase/firestore";

// TODO: Replace the following with your app's Firebase project configuration
// For Firebase JavaScript SDK v7.20.0 and later, `measurementId` is an optional field
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCUpKcehI-daQSRI0Xm8OyZqEeOXVko_UI",
    authDomain: "ereader-62dd7.firebaseapp.com",
    databaseURL: "https://ereader-62dd7.firebaseio.com",
    projectId: "ereader-62dd7",
    storageBucket: "ereader-62dd7.appspot.com",
    messagingSenderId: "637831008892",
    appId: "1:637831008892:web:27af083e362b353ba86ff9",
    measurementId: "G-WC30K1YCCK"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
//firebase.firestore().settings(settings);
  export default firebase;