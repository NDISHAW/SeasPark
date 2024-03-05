import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDF9DKF44fhzBzk5fZB5Mk4_21q4Ey2kxQ",
  authDomain: "inspection-e4bf7.firebaseapp.com",
  projectId: "inspection-e4bf7",
  storageBucket: "inspection-e4bf7.appspot.com",
  messagingSenderId: "94545597565",
  appId: "1:94545597565:web:9e1d12415061541a4ecd14",
  measurementId: "G-P207FELWW2",
};
// const db = firebaseApp.firestore();
// const auth = firebaseApp.auth();
const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

// Sign up function
const signUp = () => {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  console.log(email, password);
  // firebase code
  firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then((result) => {
      // Signed in
      document.write("You are Signed Up");
      console.log(result);
      // ...
    })
    .catch((error) => {
      console.log(error.code);
      console.log(error.message);
      // ..
    });
  signUpRails();
};

// Sign In function
const signIn = () => {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  // firebase code
  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then((result) => {
      // Signed in
      document.write("You are Signed In");
      // window.location = "form.html";
      window.location = "dashboard.html";

      console.log(result);
    })
    .catch((error) => {
      console.log(error.code);
      console.log(error.message);
    });
};
