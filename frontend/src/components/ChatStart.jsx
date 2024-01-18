/*eslint-disable */
import React from "react";

function ChatStart(props) {
  const letStart = () => {
    props.actions.startBtn();
  };

  return (
    <div>
      <button type="button" className="chatstart" onClick={letStart}>
        Let Start
      </button>
    </div>
  );
}

export default ChatStart;
