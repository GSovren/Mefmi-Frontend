import React, { useState } from "react";
import "../pages/LoginPage.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import DashboardSection from "../components/DashboardSection";
import ScrollToTop from "../components/ScrollToTop";
// import GoogleLogo from "../assets/google-png.png";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/firebase-config";
// import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

function LoginPage() {
  //   const [loginEmail, setLoginEmail] = useState("");
  //   const [loginPassword, setLoginPassword] = useState("");
  //   const [loginError, setLoginError] = useState("");
  //   const [loginSuccess, setLoginSuccess] = useState("");

  //   const login = async () => {
  //     try {
  //       const user = await signInWithEmailAndPassword(
  //         auth,
  //         loginEmail,
  //         loginPassword
  //       );
  //       console.log(user);
  //       // Navigate to homepage after successful login
  //       // Clear any previous error messages
  //   setLoginError('');
  //       setLoginSuccess('Successful Login.');
  //   // Delay navigation to show message
  //   setTimeout(() => {
  //     setLoginSuccess('');
  //     navigate('/');
  //   }, 2000); // 2 seconds delay
  //     } catch (error) {
  //       console.log(error.message);
  //       setLoginError("Incorrect email or password, please try again.");
  //       // Clear the input fields
  //     setLoginEmail('');
  //     setLoginPassword('');
  //     }
  //   };

  const navigate = useNavigate(); // Initialize navigate
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [loginError, setLoginError] = useState("");
  const [loginSuccess, setLoginSuccess] = useState("");

  async function loginWithEmailPassword(email, password) {
  try {
    // 1. Sign in with Firebase
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const firebaseUser = userCredential.user;

    // 2. Get fresh Firebase ID token
    const idToken = await firebaseUser.getIdToken(true); // Force refresh
    console.log("ID Token:", idToken);

    // 3. Verify with backend
    const response = await fetch("https://192.168.100.87:8080/api/auth/verify", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${idToken}`,
      },
    });

    // Optional: check response status
    if (!response.ok) {
      throw new Error("Backend verification failed");
    }

    console.log(idToken)
    return { success: true, user: firebaseUser, token: idToken };
  } catch (error) {
    console.error("Login failed:", error);
    throw error;
  }
}

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoginError("");
    setLoginSuccess("");
    try {
      await loginWithEmailPassword(email, password);
      console.log("Login successful, setting success message");
      setLoginSuccess("Successful Login.");
      // Optional: delay before redirect to show message
      setTimeout(() => {
        setLoginSuccess("");
        navigate("/");
      }, 2000); // 2 seconds
    } catch (error) {
      console.log("Error during login:", error);
      setLoginError("Incorrect email or password, please try again.");
    }
  };

  const closeLogin = () => {
    navigate("/");
  };

  // const signInWithGoogle = async () => {
  //     const provider = new GoogleAuthProvider();
  //     try {
  //       // 1. Sign in with Google
  //       const result = await signInWithPopup(auth, provider);
  //       const firebaseUser = result.user;

  //       // 2. Get Firebase ID token
  //       const idToken = await firebaseUser.getIdToken();

  //       // 3. Extract user data
  //       const firebaseUid = firebaseUser.uid;
  //       const email = firebaseUser.email;
  //       const displayName = firebaseUser.displayName || '';
  //       const [firstName = 'Unknown', ...lastNameParts] = displayName.split(' ');
  //       const lastName = lastNameParts.join(' ') || 'User';

  //       // 4. Auto-register/login in backend
  //       const response = await fetch('http://192.168.100.87:8080/api/auth/quick-register', {
  //         method: 'POST',
  //         headers: {
  //           'Content-Type': 'application/json',
  //           'Authorization': `Bearer ${idToken}`
  //         },
  //         body: JSON.stringify({
  //           firstName: firstName,
  //           lastName: lastName,
  //           email: email,
  //           firebaseUid: firebaseUid,
  //           role: 'READ_ONLY'
  //         })
  //       });

  //       if (response.ok) {
  //         // Successful backend registration/login
  //         navigate("/"); // or onboarding page if needed
  //       } else {
  //         // Handle backend error
  //         console.error('Backend registration/login failed');
  //       }
  //     } catch (error) {
  //       console.error('Google sign-in failed:', error);
  //     }
  //   };

  return (
    <div className="login-page-container">
      <form className="login-form-container" onSubmit={handleSubmit}>
        <div className="login-form-header">
          <i className="ri-close-circle-fill" onClick={closeLogin}></i>
        </div>
        <div className="login-form-body">
          <h1>Sign In to Continue</h1>

          <div className="input-container">
            <label htmlFor="">Email Address:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="input-container">
            <label htmlFor="">Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          {/* Login success message display */}
          {loginSuccess && (
            <div className="success-message">{loginSuccess}</div>
          )}
          {/* Error message display */}
          {loginError && <div className="error-message">{loginError}</div>}

          <button className="signin-btn" type="submit">
            SIGN IN
          </button>
          <div className="dont-have-account">
            Dont have an account? <Link to="/register">Sign up</Link>
          </div>

          {/* <div className="or-container">------------ OR ------------</div> */}

          {/* <div className="continue-with-google" onClick={signInWithGoogle}>
            <img src={GoogleLogo} alt="" />
            &nbsp;Continue with Google
          </div> */}
        </div>
      </form>
      <div className="login-container">
        <div className="login-overlay"></div>
        <ScrollToTop />
        <Navbar />
        <DashboardSection />
        <Footer />
      </div>
    </div>
  );
}

export default LoginPage;
