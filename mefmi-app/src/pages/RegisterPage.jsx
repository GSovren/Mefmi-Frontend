import React from "react";
import "../pages/LoginPage.css";
import ScrollToTop from "../components/ScrollToTop";
import Navbar from "../components/Navbar";
import DashboardSection from "../components/DashboardSection";
import Footer from "../components/Footer";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/firebase-config";
import firebase from "firebase/compat/app";

async function registerWithEmailPassword(email, password, userData) {
  try {
    // 1. Create Firebase user
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    const firebaseUser = userCredential.user;

    // 2. Get Firebase ID token
    const idToken = await firebaseUser.getIdToken();

    // 3. Extract Firebase UID
    const firebaseUid = firebaseUser.uid;

    // 4. Register user in your backend, passing firebaseUid
    await fetch("http://192.168.100.87:8080/api/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${idToken}`,
      },
      body: JSON.stringify({
        firstName: userData.firstName,
        lastName: userData.lastName,
        email: email,
        firebaseUid: firebaseUid, // pass Firebase UID here
        role: userData.role,
        countryCode: userData.countryCode,
      }),
    });

    // Return both success and firebaseUid
    return { success: true, firebaseUid, user: firebaseUser };
  } catch (error) {
    console.error("Registration failed:", error);
    throw error;
  }
}

function RegisterPage() {
  //   const [registerEmail, setRegisterEmail] = useState("");
  //   const [registerPassword, setRegisterPassword] = useState("");
  //   const navigate = useNavigate(); // Initialize navigate

  //   const register = async () => {
  //     try {
  //       const user = await createUserWithEmailAndPassword(
  //         auth,
  //         registerEmail,
  //         registerPassword
  //       );
  //       console.log(user);
  //     } catch (error) {
  //       console.log(error.message);
  //     }
  //   };

  const closeLogin = () => {
    navigate("/");
  };

  const navigate = useNavigate();

  // State for form inputs
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // You can add role and countryCode as needed

  const handleRegister = async () => {
    try {
      const result = await registerWithEmailPassword(email, password, {
        firstName,
        lastName,
        role: null,
        countryCode: null,
      });
      const { firebaseUid } = result; // Extract firebaseUid here

      // You can now use firebaseUid if needed
      // For example, send it again to your backend if necessary, or just proceed

      // Navigate or show success message
      navigate("/");
    } catch (error) {
      alert("Registration error: " + error.message);
    }
  };

  return (
    <div className="login-page-container">
      <div className="login-form-container">
        <div className="login-form-header">
          <i className="ri-close-circle-fill" onClick={closeLogin}></i>
        </div>
        <div className="login-form-body">
          <h1>Sign Up</h1>

          <div className="input-container">
            <label htmlFor="">First Name:</label>
            <input
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div className="input-container">
            <label htmlFor="">Last Name:</label>
            <input
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
          <div className="input-container">
            <label htmlFor="">Email Address:</label>
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="input-container">
            <label htmlFor="">Password:</label>
            <input
              type="text"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button className="signin-btn" onClick={handleRegister}>
            SIGN UP
          </button>
          <br />
          <div className="dont-have-account">
            Already have an account? <Link to="/login">Sign In</Link>
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

export default RegisterPage;
