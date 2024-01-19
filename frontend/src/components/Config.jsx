/*eslint-disable */
import { createChatBotMessage } from "react-chatbot-kit";
import ProductChoiceMakeup from "./choix/ProductChoiceMakeUP";
import ProductChoiceLipstick from "./choix/ProductChoiceLipstick";
import ChatStart from "./ChatStart";
import ProductChoiceHairCol from "./choix/ProductChoiceHairCol";

const botName = "Loréal";
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
<<<<<<< HEAD
      widgetName: "blonde",
      widgetFunc: (props) => <ProductChoise {...props} />,
=======
      widgetName: "makeUp",
      widgetFunc: (props) => <ProductChoiceMakeup {...props} />,
    },
    {
      widgetName: "lipStick",
      widgetFunc: (props) => <ProductChoiceLipstick {...props} />,
>>>>>>> dev
    },
    {
      widgetName: "hairColor",
      widgetFunc: (props) => <ProductChoiceHairCol {...props} />,
    },
  ],
};

export default config;
