/*eslint-disable */
import { createChatBotMessage } from "react-chatbot-kit";
import ProductChoise from "./choix/ProductChoise";
import ChatStart from "./ChatStart";
import ProductChoiceHairCol from "./choix/ProductChoiceHairCol";

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
      widgetName: "blonde",
      widgetFunc: (props) => <ProductChoise {...props} />,
    },
    {
      widgetName: "hairColor",
      widgetFunc: (props) => <ProductChoiceHairCol {...props} />,
    },
  ],
};

export default config;
