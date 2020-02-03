import firebase from "firebase";
 // Your web app's Firebase configuration

 const firebaseConfig = {
  apiKey: "AIzaSyDl_qbRCFl0er1pgxmIjMiPKxgFlRUCKOs",
  authDomain: "sensedose-e2061.firebaseapp.com",
  databaseURL: "https://sensedose-e2061.firebaseio.com",
  projectId: "sensedose-e2061",
  storageBucket: "sensedose-e2061.appspot.com",
  messagingSenderId: "1058004947818",
  appId: "1:1058004947818:web:277e1c4ad7e8894b644b13",
  measurementId: "G-S3C6GZF51Z"
};
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Get the Database service for the default app
const db = firebase.database();
export default  db 


  