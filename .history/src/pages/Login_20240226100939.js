import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from '../components';
import { app } from "../utils/Firebase";
import {
  getAuth,signInWithEmailAndPassword,
} from "firebase/auth";
import { actionType } from "../utils/reducer";
import { useStateValue } from "../utils/StateProvider";
import { toast, Toaster } from "react-hot-toast";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();
    const firebaseAuth = getAuth(app);

  const [{ user, cartShow, cartItems }, dispatch] = useStateValue();
  const loginWithEmailAndPassword = async (e) => {
    try {
      const result = await signInWithEmailAndPassword(
        firebaseAuth,
        email,
        password
      );
      const { user } = result;
      dispatch({
        type: actionType.SET_USER,
        user,
      });
      localStorage.setItem("user", JSON.stringify(user));
    } catch (error) {
      toast(error.message);
      console.error("An error occurred during email/password login:", error);
    }
  };    
    const handleLogin = async (e) => {
      e.preventDefault();
      setError("");
      try {
        await loginWithEmailAndPassword(email, password);
        navigate("/home");
        // setOpenLogInModal(false);
      } catch (e) {
        setError(e.message);
        toast(e.message);
        console.log(e.message);
      }
    };
  return (
    <section>
      <div className="container">
        <form action="">
            
        </form>
      </div>
    </section>
  );
}

export default Login












// const loginWithEmailAndPassword = async (e) => {
//   try {
//     const result = await signInWithEmailAndPassword(
//       firebaseAuth,
//       email,
//       password
//     );
//     const { user } = result;
//     dispatch({
//       type: actionType.SET_USER,
//       user,
//     });
//     localStorage.setItem("user", JSON.stringify(user));
//     onClose();
//   } catch (error) {
//     toast(error.message);
//     console.error("An error occurred during email/password login:", error);
//   }
// };

// const handleLogin = async (e) => {
//   e.preventDefault();
//   setError("");
//   try {
//     await loginWithEmailAndPassword(email, password);
//     navigate("/home");
//     // setOpenLogInModal(false);
//   } catch (e) {
//     setError(e.message);
//     toast(e.message);
//     console.log(e.message);
//   }
// };
