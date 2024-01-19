import React, { useState } from "react";
import Modal from "react-modal";
import Chatbot from "react-chatbot-kit";
import "react-chatbot-kit/build/main.css";
import MessageParser from "../MessageParser";
import ActionProvider from "../ActionProvider";
import config from "../Config";
import "../../styles/modal.scss";

function ImgModal() {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div className="modal" onClick={openModal} aria-hidden="true">
      <Modal
        className="tablette-modal"
        isOpen={isOpen}
        onRequestClose={closeModal}
        contentLabel="Image Modal"
      >
        <div>
          {isOpen && (
            <Chatbot
              config={config}
              actionProvider={ActionProvider}
              messageParser={MessageParser}
            />
          )}
        </div>
      </Modal>
    </div>
  );
}

export default ImgModal;
