
import React from "react";
import { useState, useEffect } from "react";
import '../components/Feedback.css'



function Feedback() {
    const [display, setDisplay] = useState(false);
    
      const togglefeedback = () => {
        setDisplay((prevDisplay) => !prevDisplay);
      };
  return (
    <div>
      <div className="closed-feedback" onClick={togglefeedback}>
        Feedback <i className="ri-feedback-fill"></i>
      </div>
      
      <div className={display ? "open-feedback active" : "open-feedback"}>
        <div className="feedback-header">
          Feedback Window{" "}
          <i className="ri-close-circle-fill" onClick={togglefeedback}></i>
        </div>
        <div className="feedback-body-container">
          <div className="feedback-body">
            <div className="feedback-messenger-container">
              <div className="initial-msg">
                Please enter your email Address and enter your feedback below.
              </div>
              <div className="feedback-inputs">
                <input type="text" placeholder="Enter email" />
                <textarea name="" placeholder="Enter your feedback here.." id=""></textarea>{" "}
                <button>
                  Send Feedback<i className="ri-send-plane-fill"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Feedback
