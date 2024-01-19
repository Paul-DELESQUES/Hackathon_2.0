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
    const message = createChatBotMessage("Bienvenue chez L'Oréal");
    updateState(message);
  };

  const handleHello = () => {
    const botMessage = createChatBotMessage("Bonjour. Que voulez-vous ?");

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  const handleMakeup = () => {
    const botMessage = createChatBotMessage(
      "Voici une panoplie de maquillage qui pourrait vous intéresser!",
      {
        widget: "makeUp",
      }
    );

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  const handleLipstick = () => {
    const botMessage = createChatBotMessage(
      "Voici le rouge à lèvre de couleur violet qui pourrait vous intéresser!",
      {
        widget: "lipStick",
      }
    );

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  const handleNothing = () => {
    const botMessage = createChatBotMessage(
      "Malheureusement, on ne possède pas ce genre de produit."
    );

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };
  const handleComprehension = () => {
    const botMessage = createChatBotMessage(
      "Je suis désolé, je ne comprends pas votre demande."
    );

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  const handleBye = () => {
    const botMessage = endChatBotMessage("Revenir à l'écran principal");

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
            handleMakeup,
            handleLipstick,
            handleNothing,
            handleComprehension,
            handleBye,
          },
        });
      })}
    </div>
  );
}

export default ActionProvider;
