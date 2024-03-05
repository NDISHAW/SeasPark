import React from 'react'

function Login() {
  return (
    <section>
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-lg-5 py-5">
                    
                </div>
            </div>
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
