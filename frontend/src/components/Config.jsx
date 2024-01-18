/*eslint-disable */
import { createChatBotMessage } from "react-chatbot-kit";
import ProductChoise from "./choix/ProductChoise";
import ChatStart from "./ChatStart";

const botName = "LOr&Al";
const config = {
  initialMessages: [
    createChatBotMessage(`Bonjour! je suis ${botName}`, {
      widget: "Let Start",
    }),
  ],
  customStyles: {
    botMessageBox: {
      backgroundColor: "#376B7E",
    },
    chatButton: {
      backgroundColor: "#5ccc9d",
    },

    widget: {
      width: "3px",
    },
  },

  widgets: [
    {
      widgetName: "Let Start",
      widgetFunc: (props) => <ChatStart {...props} />,
    },
    {
      widgetName: "dogPicture",
      widgetFunc: (props) => <ProductChoise {...props} />,
    },
  ],
};

export default config;
