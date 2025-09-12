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

function RegisterPage() {
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const navigate = useNavigate(); // Initialize navigate

  const register = async () => {
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassword
      );
      console.log(user);
    } catch (error) {
      console.log(error.message);
    }
  };

  const closeLogin = () => {
    navigate('/')
  }

  
  return (
    <div className="login-page-container">
      <div className="login-form-container">
        <div className="login-form-header">
          <i className="ri-close-circle-fill" onClick={closeLogin}></i>
        </div>
        <div className="login-form-body">
          <h1>Sign Up</h1>

          <div className="input-container">
            <label htmlFor="">Email Address:</label>
            <input
              type="text"
              onChange={(event) => {
                setRegisterEmail(event.target.value);
              }}
            />
          </div>
          <div className="input-container">
            <label htmlFor="">Password:</label>
            <input
              type="text"
              onChange={(event) => {
                setRegisterPassword(event.target.value);
              }}
            />
          </div>
          <div className="input-container">
            <label htmlFor="">Confirm Password:</label>
            <input type="text" />
          </div>

          <button className="signin-btn" onClick={register}>SIGN UP</button>
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
