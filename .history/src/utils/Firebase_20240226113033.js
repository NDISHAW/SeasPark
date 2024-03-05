import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB_QOwpVLZPRL7Lz5AbKYgsMHWrtq5I6sU",
  authDomain: "hckl-aa4d2.firebaseapp.com",
  projectId: "hckl-aa4d2",
  storageBucket: "hckl-aa4d2.appspot.com",
  messagingSenderId: "17997095394",
  appId: "1:17997095394:web:49b748dfc3ce5b5fe499bb",
  measurementId: "G-CDWTLD9CB5",
};

// const firebaseConfig = {
//   apiKey: "AIzaSyD_bxGG0WgOKDejZvER2fTq2xZZjfUs8zs",
//   authDomain: "restaurantapp-c2ed6.firebaseapp.com",
//   databaseURL: "https://restaurantapp-c2ed6-default-rtdb.firebaseio.com",
//   projectId: "restaurantapp-c2ed6",
//   storageBucket: "restaurantapp-c2ed6.appspot.com",
//   messagingSenderId: "174416156605",
//   appId: "1:174416156605:web:2ec169ea4ef3e7bb25e4d4",
// };
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
