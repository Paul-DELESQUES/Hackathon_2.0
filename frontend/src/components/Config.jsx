import { createChatBotMessage } from "react-chatbot-kit";
import ProductChoise from "./choix/ProductChoise";

const config = {
  botName: "Lor&Al",
  initialMessages: [
    createChatBotMessage("Bonjour, je suis votre assistant shop l'Oréal", {
      widget: "productOptions",
    }),
  ],
  customStyles: {
    botMessageBox: {
      backgroundColor: "#376B7E",
    },
    chatButton: {
      backgroundColor: "#376B7E",
    },
  },
  widgets: [
    {
      widgetName: "productOptions",
      widgetFunc: (props) => <ProductChoise props={props} />,
    },
  ],
};

export default config;
