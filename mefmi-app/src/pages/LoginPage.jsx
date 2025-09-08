import React, { useState } from "react";
import "../pages/LoginPage.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import DashboardSection from "../components/DashboardSection";
import ScrollToTop from "../components/ScrollToTop";
import GoogleLogo from "../assets/google-png.png";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/firebase-config";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

function LoginPage() {
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const navigate = useNavigate(); // Initialize navigate

  const login = async () => {
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginPassword
      );
      console.log(user);
      // Navigate to homepage after successful login
      navigate('/');
    } catch (error) {
      console.log(error.message);
    }
  };

  const closeLogin = () => {
    navigate('/')
  }

const handleGoogleSignIn = async () => {
  const provider = new GoogleAuthProvider();
  try {
    const result = await signInWithPopup(auth, provider);
    // Optionally, get the credential for access token
    const credential = GoogleAuthProvider.credentialFromResult(result);
    if (credential) {
      const token = credential.accessToken;
      console.log("Google access token:", token);
    }
    console.log("User info:", result.user);
    // Navigate to homepage after successful login
    navigate('/');
  } catch (error) {
    console.error("Error during Google Sign-In:", error);
  }
};

  return (
    <div className="login-page-container">
      <div className="login-form-container">
        <div className="login-form-header">
          <i className="ri-close-circle-fill" onClick={closeLogin}></i>
        </div>
        <div className="login-form-body">
          <h1>Sign In to Continue</h1>

          <div className="input-container">
            <label htmlFor="">Email Address:</label>
            <input
              type="text"
              onChange={(event) => {
                setLoginEmail(event.target.value);
              }}
            />
          </div>
          <div className="input-container">
            <label htmlFor="">Password:</label>
            <input
              type="text"
              onChange={(event) => {
                setLoginPassword(event.target.value);
              }}
            />
          </div>

          <button className="signin-btn" onClick={login}>SIGN IN</button>
          <div className="dont-have-account">
            Dont have an account? <Link to="/register">Sign up</Link>
          </div>

          <div className="or-container">------------ OR ------------</div>

          <div className="continue-with-google" onClick={handleGoogleSignIn}>
            <img src={GoogleLogo} alt="" />
            &nbsp;Continue with Google
          </div>
        </div>
      </div>
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
