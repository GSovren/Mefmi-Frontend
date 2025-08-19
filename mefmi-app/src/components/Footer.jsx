import React from 'react'
import '../components/Footer.css';

function Footer() {
  return (
    <div className='footer-container'>
        <div className="footer-inner-container">
            <div className="footer-msg-left">
                ACCESS DATA ACROSS AFRICA | EMPOWERED BY MEFMI
            </div>
            <div className="contact-info">
  <div className="slide-content">
    <div className="inner-content">
      {/* Original content */}
      <span>
        <i className="ri-map-pin-fill"></i> 9 Earls Rd, Alexandra Park, P O Box A1419, Avondale, Harare, Zimbabwe &nbsp;
        <i className="ri-phone-fill"></i> 263-242-745988/9/91-4 &nbsp;&nbsp;&nbsp;&nbsp;
      </span>
      {/* Duplicate content for seamless scrolling */}
      <span>
        <i className="ri-map-pin-fill"></i> 9 Earls Rd, Alexandra Park, P O Box A1419, Avondale, Harare, Zimbabwe &nbsp;
        <i className="ri-phone-fill"></i> 263-242-745988/9/91-4 &nbsp;&nbsp;&nbsp;&nbsp;
      </span>
    </div>
  </div>
</div>
            <div className="footer-msg-right">
              Copyright 2025 MEFMI &nbsp;<i class="ri-copyright-line"></i>
            </div>
        </div>
    </div>
  )
}

export default Footer
