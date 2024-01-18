/*eslint-disable */
import React from "react";

function ChatStart(props) {
  const letStart = () => {
    props.actions.startBtn();
  };

  return (
    <div>
      <button type="button" className="chatstart" onClick={letStart}>
        Que recherchez-vous ?
      </button>
    </div>
  );
}

export default ChatStart;
