import React from 'react'

function Login() {
  return (
    <section>
        <div className="col-lg-5 py-5">
            <div className="row">
              <h2>Login with email your and password</h2>
              <div className="col-12">

            <div className="email">
              <label for="email">email</label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Write your email"
              />
            </div>

            <div className="pass">
              <label for="password">Password</label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="password"
              />
            </div>


            <button id="submit-btn" onclick="signIn()">Sign In</button>

            <p>Dont have an account ?</p>
            <span
              >Sign Up<a href="signup.html">
                <u><b>HERE</b></u></a
              ></span
            >
        </div>
    </section>
  )
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