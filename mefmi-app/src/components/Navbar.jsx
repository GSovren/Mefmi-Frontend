import { useState } from 'react';
import {Link, NavLink} from 'react-router-dom';
import './Navbar.css';
import logo from '../assets/Mefmi-logo-full.jpg'

function Navbar() {
    const [click, setClick] = useState(false);
    const handleClick = () => {
        setClick(!click);
    }
    const closeMobileMenu = () => setClick(false);
  return (
    <div>
      <nav className="nabar" id='navbar'>
        
        <div className="navbar-container">
          <div className="contact-info-container">
            <div className="mefmi-address">
              <i class="ri-map-pin-fill"></i> &nbsp;9 Earls Rd, Alexandra Park, P O Box A1419, Avondale, Harare, Zimbabwe
            </div>
            <div className="mefmi-contact">
              <i class="ri-phone-fill"></i> &nbsp;263-242-745988/9/91-4
            </div>
          </div>
            <div className="navbar-inner-container">
              <Link to='/' className="navbar-logo">
                <img src={logo} alt="" /> <h2>"One stop,One Africa, discover more with MEFMI"</h2> 
            </Link>
            <div className="nav-menu-container">
                <ul className={click ? "nav-menu active": "nav-menu"}> {/*//makes nav menu dissapear when clicked in mobile view*/}
                <NavLink to='/' className='nav-links'  onClick={closeMobileMenu}>
                    DASHBOARD
                </NavLink>    
                <NavLink to='/explore' className='nav-links' onClick={closeMobileMenu}>
                    EXPLORE
                </NavLink>
                <NavLink to='/rankings' className='nav-links' onClick={closeMobileMenu}>
                    RANKINGS
                </NavLink>
                <NavLink to='/compare' className='nav-links' onClick={closeMobileMenu}>
                    COMPARE
                </NavLink>
                <NavLink to='/upload' className='nav-links' onClick={closeMobileMenu}>
                    UPLOAD
                </NavLink>
                <NavLink to='/sign '>
                    <button className='sign-up-btn'><i className="ri-user-fill"></i> Sign In</button>
                </NavLink>
            </ul>
            <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "ri-close-line": "ri-menu-3-line"}></i>
            </div> 
            </div>  
            </div>   
        </div>
      </nav>
    </div>
  )
}

export default Navbar
