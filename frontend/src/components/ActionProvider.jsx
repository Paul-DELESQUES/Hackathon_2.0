/*eslint-disable */
import React from "react";

function ActionProvider({ createChatBotMessage, setState, children }) {
  const updateState = (message) => {
    setState((prev) => ({
      ...prev,
      message: [...prev.messages, message],
    }));
  };

  const startBtn = () => {
    const message = createChatBotMessage("Quelle est votre demande ?");
    updateState(message);
  };

  const handleHello = () => {
    const botMessage = createChatBotMessage("Bonjour. Que voulez-vous ?");

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  const handleWhatColortype = () => {
    const botMessage = createChatBotMessage(
      "Voici ce que j'ai à vous proposez",
      {
        widget: "hairColor",
      }
    );

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  const handleBlonde = () => {
    const botMessage = createChatBotMessage("couleur de cheveux!", {
      widget: "blonde",
    });

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  const handleNotFound = () => {
    const botMessage = createChatBotMessage(
      "Désolé, je n'ai pas compris votre question"
    );

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          actions: {
            startBtn,
            handleHello,
            handleWhatColortype,
            handleBlonde,
            handleNotFound,
          },
        });
      })}
    </div>
  );
}

export default ActionProvider;
