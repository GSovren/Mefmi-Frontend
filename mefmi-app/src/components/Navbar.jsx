import React, { useState, useEffect } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import "./Navbar.css";
import logo from "../assets/Mefmi-logo-full.jpg";
// import AFDBlogo from '../assets/AFDB Logo.png';
import { auth } from "../firebase/firebase-config";
import { onAuthStateChanged, signOut } from "firebase/auth";

function Navbar() {
  const [user, setUser] = useState(null);
  const [click, setClick] = useState(false);
  const [showMoreLinks, setShowMoreLinks] = useState(false);

  const handleMoreBtnClick = () => {
    setShowMoreLinks((prev) => !prev);
  };

  const handleClick = () => {
    setClick(!click);
  };
  const closeMobileMenu = () => setClick(false);

  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  const logout = async () => {
    try {
      // tokenManager.cleanup(); // Uncomment if needed
      await signOut(auth);
      setUser(null);
      window.location.href = "/login";
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  // const [user, setUser] = useState({});
  // onAuthStateChanged(auth, (currentUser) => {
  //   setUser(currentUser);
  // });
  // const logout = async () => {
  //   await signOut(auth);
  // };

  // useEffect(() => {
  //   const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
  //     setUser(currentUser);
  //   });
  //   return () => unsubscribe();
  // }, []);

  const handleUploadClick = () => {
    if (user) {
      navigate("/upload");
    } else {
      navigate("/login");
    }
  };

  const handleUploadAndCloseMenu = () => {
    handleUploadClick();
    closeMobileMenu();
  };

  return (
    <div>
      <nav className="nabar" id="navbar">
        <div className="navbar-container">
          {/* <div className="contact-info-container">
            <div className="mefmi-address">
              <i className="ri-map-pin-fill"></i> &nbsp;9 Earls Rd, Alexandra Park, P O Box A1419, Avondale, Harare, Zimbabwe
            </div>
            <div className="mefmi-contact">
              <i className="ri-phone-fill"></i> &nbsp;263-242-745988/9/91-4
            </div>
          </div> */}
          <div className="navbar-inner-container">
            <Link to="/" className="navbar-logo">
              <img src={logo} alt="" />{" "}
              {/* <div className="afdb-logo">
              <img src={AFDBlogo} alt="" />{" "}
              </div> */}
              <h2>"One stop,One Africa, discover more with MEFMI"</h2>
            </Link>
            <div className="nav-menu-container">
              <ul className={click ? "nav-menu active" : "nav-menu"}>
                {" "}
                {/*//makes nav menu dissapear when clicked in mobile view*/}
                <NavLink to="/" className="nav-links" onClick={closeMobileMenu}>
                  DASHBOARD
                </NavLink>
                <NavLink
                  to="/explore"
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                  EXPLORE
                </NavLink>
                <NavLink
                  to="/compare"
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                  COMPARE
                </NavLink>
                <NavLink
                  to="/rankings"
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                  RANKINGS
                </NavLink>
                <NavLink
                  to="/reports"
                  className="nav-links"
                  onClick={handleUploadAndCloseMenu}
                >
                  REPORTS
                </NavLink>
                <div className="more-btn" onClick={handleMoreBtnClick}>
                  <i className="ri-more-2-fill"></i>
                  {showMoreLinks && (
                    <div className="more-links">
                      <NavLink
                        to="/upload"
                        className="nav-links-more"
                        onClick={handleUploadAndCloseMenu}
                      >
                        UPLOADS
                      </NavLink>
                      <NavLink
                        to="/approvals"
                        className="nav-links-more"
                        onClick={handleUploadAndCloseMenu}
                      >
                        APPROVALS
                      </NavLink>
                      <NavLink
                        to="/"
                        className="nav-links-more"
                        onClick={handleUploadAndCloseMenu}
                      >
                        CONTACT
                      </NavLink>
                      <div className="social-links">
                        <i className="ri-facebook-circle-fill"></i>
                        <i className="ri-twitter-x-fill"></i>
                        <i className="ri-youtube-fill"></i>
                        <i className="ri-global-fill"></i>
                      </div>
                    </div>
                  )}
                </div>
                <NavLink to="/login">
                  <button className="sign-up-btn" disabled={!!user}>
                    <i className="ri-user-fill"></i>{" "}
                    {user ? user.email : "Sign In"}
                  </button>
                </NavLink>
                {user && (
                  <button className="sign-out-btn" onClick={logout}>
                    Sign out
                  </button>
                )}
              </ul>
              <div className="menu-icon" onClick={handleClick}>
                <i className={click ? "ri-close-line" : "ri-menu-3-line"}></i>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
