// import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { Button } from '../components';
// import { app } from "../utils/Firebase";
// import {
//   getAuth,signInWithEmailAndPassword,
// } from "firebase/auth";
// import { actionType } from "../utils/reducer";
// import { useStateValue } from "../utils/StateProvider";
// import { toast, Toaster } from "react-hot-toast";

// function Login() {
//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");
//     const [error, setError] = useState("");
//     const navigate = useNavigate();
//     const firebaseAuth = getAuth(app);

//   const [{ user, cartShow, cartItems }, dispatch] = useStateValue();
//   const loginWithEmailAndPassword = async (e) => {
//     try {
//       const result = await signInWithEmailAndPassword(
//         firebaseAuth,
//         email,
//         password
//       );
//       const { user } = result;
//       dispatch({
//         type: actionType.SET_USER,
//         user,
//       });
//       localStorage.setItem("user", JSON.stringify(user));
//     } catch (error) {
//       toast(error.message);
//       console.error("An error occurred during email/password login:", error);
//     }
//   };    
//     const handleLogin = async (e) => {
//       e.preventDefault();
//       setError("");
//       try {
//         await loginWithEmailAndPassword(email, password);
//         navigate("/admn");
//         // setOpenLogInModal(false);
//       } catch (e) {
//         setError(e.message);
//         toast(e.message);
//         console.log(e.message);
//       }
//     };
//   return (
//     <section>
//       <div className="container">
//         <form onSubmit={handleLogin}>
//           <div className="row justify-content-center">
//             <div className="col-lg-5 py-5">
//               <Toaster />
//               <div className="row">
//                 <h2>Login with email your and password</h2>
//               </div>
//               <div class="email">
//                 <label for="email">email</label>
//                 <input
//                   type="email"
//                   name="email"
//                   id="email"
//                   value={email}
//                   placeholder="Write your email"
//                   onChange={(e) => setEmail(e.target.value)}
//                 />
//               </div>
//               <div class="pass">
//                 <label for="password">Password</label>
//                 <input
//                   type="password"
//                   name="password"
//                   id="password"
//                   placeholder="password"
//                   value={password}
//                   onChange={(e) => setPassword(e.target.value)}
//                 />
//               </div>
//               <Button id="submit-btn">Sign In</Button>
//             </div>
//           </div>
//         </form>
//       </div>
//     </section>
//   );
// }

// export default Login





import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "../components";
import { app } from "../utils/firebase.config";
import { actionType } from "../context/reducer";
import { useStateValue } from "../context/StateProvider";
import { toast, Toaster } from "react-hot-toast";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const firebaseAuth = getAuth(app);
  const [{ user, cartShow, cartItems }, dispatch] = useStateValue();

  const loginWithEmailAndPassword = async () => {
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
      await loginWithEmailAndPassword();
      navigate("/admn");
    } catch (e) {
      setError(e.message);
      toast(e.message);
      console.log(e.message);
    }
  };

  return (
    <section>
      <div className="container">
        <form onSubmit={handleLogin}>
          <div className="row justify-content-center">
            <div className="col-lg-5 py-5">
              <Toaster />
              <div className="row">
                <h2>Login with your email and password</h2>
              </div>
              <div className="email">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Write your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="pass">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <Button id="submit-btn">Sign In</Button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Login;


