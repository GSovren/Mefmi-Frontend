import React from "react";
import { useState, useEffect } from "react";
import '../components/Chatbot.css'

function Chatbot() {
  const [display, setDisplay] = useState(false);

  const toggleChatbot = () => {
    setDisplay((prevDisplay) => !prevDisplay);
  };
  return (
    <div>
      <div className="closed-chatbot" onClick={toggleChatbot}>
        Enquieries? <br /> Lets discuss <i className="ri-chat-ai-fill"></i>
      </div>
      
      <div className={display ? "open-chatbot active" : "open-chatbot"}>
        <div className="chatbot-header">
          MEMFI Chatbot{" "}
          <i className="ri-close-circle-fill" onClick={toggleChatbot}></i>
        </div>
        <div className="chatbot-body-container">
          <div className="chatbot-body">
            <div className="chatbot-messenger-container">
              <div className="initial-msg">
                <i className="ri-robot-fill"></i> Ask anything? How can I help you?
              </div>
              <div className="messenger">
                <input type="text" placeholder="Enter query here.." />{" "}
                <button>
                  <i className="ri-send-plane-fill"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Chatbot;
