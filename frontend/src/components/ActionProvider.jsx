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
    const message = createChatBotMessage("Que recherchez-vous ?");
    updateState(message);
  };

  const handleHello = () => {
    const botMessage = createChatBotMessage("Bonjour. Que voulez-vous ?");

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

<<<<<<< HEAD
  const handleWhatColortype = () => {
    const botMessage = createChatBotMessage(
      "Voici ce que j'ai à vous proposez",
      {
        widget: "hairColor",
=======
  const handleMakeup = () => {
    const botMessage = createChatBotMessage(
      "Voici une panoplie de maquillage qui pourrait vous intéresser!",
      {
        widget: "makeUp",
>>>>>>> dev
      }
    );

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

<<<<<<< HEAD
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
=======

  const handleLipstick = () => {
    const botMessage = createChatBotMessage(
      "Voici le rouge à lèvre de couleur violet qui pourrait vous intéresser!",
      {
        widget: "lipStick",
      }
>>>>>>> dev
    );

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

<<<<<<< HEAD
=======
    const handleNothing = () => {
      const botMessage = createChatBotMessage("Really, bro ?");

      setState((prev) => ({
        ...prev,
        messages: [...prev.messages, botMessage],
      }));
    };

>>>>>>> dev
  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
<<<<<<< HEAD
          actions: {
            startBtn,
            handleHello,
            handleWhatColortype,
            handleBlonde,
            handleNotFound,
          },
=======
          actions: { startBtn, handleHello, handleMakeup, handleLipstick, handleNothing },
>>>>>>> dev
        });
      })}
    </div>
  );
}

export default ActionProvider;