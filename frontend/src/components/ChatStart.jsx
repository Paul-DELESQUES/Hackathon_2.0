/*eslint-disable */
import React from "react";
import "../styles/chatbot.scss";

function ChatStart(props) {
  const letStart = () => {
    props.actions.startBtn();
  };

  return (
    <div className="chatbot-container">
      <div className="chatbot-head" onClick={letStart}>
        En quoi puis-je vous aider ?
      </div>
    </div>
  );
}

export default ChatStart;
