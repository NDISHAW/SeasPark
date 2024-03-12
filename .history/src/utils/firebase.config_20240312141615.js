import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA8DkuVYUcOyYi-QZ0v0qvKXDixlp8nO2k",
  authDomain: "seaspark-1707142741517.firebaseapp.com",
  projectId: "seaspark-1707142741517",
  storageBucket: "seaspark-1707142741517.appspot.com",
  messagingSenderId: "518070163389",
  appId: "1:518070163389:web:beecc4c7b3cbea1445e4d4",
  measurementId: "G-TEL56C49T8",
};


const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

const firestore = getFirestore(app);
const storage = getStorage(app);
const auth = getAuth(app);

export { app, firestore, storage, auth };

// Sign up function
// const signUp = () => {
//   const email = document.getElementById("email").value;
//   const password = document.getElementById("password").value;
//   console.log(email, password);
//   // firebase code
//   firebase
//     .auth()
//     .createUserWithEmailAndPassword(email, password)
//     .then((result) => {
//       // Signed in
//       document.write("You are Signed Up");
//       console.log(result);
//       // ...
//     })
//     .catch((error) => {
//       console.log(error.code);
//       console.log(error.message);
//       // ..
//     });
//   signUpRails();
// };

// // Sign In function
// const signIn = () => {
//   const email = document.getElementById("email").value;
//   const password = document.getElementById("password").value;
//   // firebase code
//   firebase
//     .auth()
//     .signInWithEmailAndPassword(email, password)
//     .then((result) => {
//       // Signed in
//       document.write("You are Signed In");
//       // window.location = "form.html";
//       window.location = "dashboard.html";

//       console.log(result);
//     })
//     .catch((error) => {
//       console.log(error.code);
//       console.log(error.message);
//     });
// };
