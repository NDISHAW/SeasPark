import React from 'react'
import { Button } from '../components';

function Login() {
  return (
    <section>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-5 py-5">
            <div className="row">
              <h2>Login with email your and password</h2>
            </div>
            <div class="email">
              <label for="email">email</label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Write your email"
              />
            </div>
            <div class="pass">
              <label for="password">Password</label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="password"
              />
            </div>
            <Button id="submit-btn" onclick="signIn()">
              Sign In
            </Button>
          </div>
        </div>
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
