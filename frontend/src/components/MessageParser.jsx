/*eslint-disable */
import React from "react";
import "../styles/chatbot.scss";

function MessageParser({ children, actions }) {
  const parse = (message) => {
    if (
      message.includes("Bonjour") ||
      message.includes("bonjour") ||
      message.includes("coucou") ||
      message.includes("hi") ||
      message.includes("salut")
    ) {
      actions.handleHello();
    }
    if (
      message.includes("hair") ||
      message.includes("cheveux") ||
      message.includes("hygiène") ||
      message.includes("coloriage")
    ) {
      actions.handleWhatColortype();
    }

    if (
      message.includes("lipstick") ||
      message.includes("rouge") ||
      message.includes("violet")
    ) {
      actions.handleLipstick();
    }
    if (
      message.includes("blonde") ||
      message.includes("rousse") ||
      message.includes("couleur")
    ) {
      actions.handleBlonde();
    }

    if (
      message.includes("chemise") ||
      message.includes("casque") ||
      message.includes("chaussures") ||
      message.includes("piscine")
    ) {
      actions.handleNotFound();
      if (
        message.includes("makeup") ||
        message.includes("maquillage") ||
        message.includes("maquillages") ||
        message.includes("make up")
      ) {
        actions.handleMakeup();
      }
      if (
        message.includes("lipstick") ||
        message.includes("rouge") ||
        message.includes("violet") ||
        message.includes("couleur")
      ) {
        actions.handleLipstick();
      }
      if (
        message.includes("bonnet") ||
        message.includes("capuche") ||
        message.includes("pantalon") ||
        message.includes("jambon")
      ) {
        actions.handleNothing();
      }
    }
    if (
      message.includes("toto") ||
      message.includes("formateur") ||
      message.includes("bg")
    ) {
      actions.handleComprehension();
    }
    if (
      message.includes("aurevoir") ||
      message.includes("bye") ||
      message.includes("au revoir") ||
      message.includes("tchao")
    ) {
      actions.handleBye();
    }
  };

   return (
    <div className="chatbot-container">
      <div className="chatbot">
        {React.Children.map(children, (child) => {
          return React.cloneElement(child, {
            parse: parse,
            actions: {},
          });
        })}
      </div>
    </div>
    );
  };
}
export default MessageParser;
