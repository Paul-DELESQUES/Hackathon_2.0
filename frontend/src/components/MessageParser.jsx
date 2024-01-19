/*eslint-disable */
import React from "react";

function MessageParser({ children, actions }) {
  const parse = (message) => {
    if (
      message.includes("hello") ||
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
      message.includes("blonde") ||
      message.includes("rousse") ||
      message.includes("violet") ||
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

    return (
      <div>
        {React.Children.map(children, (child) => {
          return React.cloneElement(child, {
            parse: parse,
            actions: {},
          });
        })}
      </div>
    );
  };
}
