/*eslint-disable */
import { createChatBotMessage } from "react-chatbot-kit";
import ProductChoiceMakeup from "./choix/ProductChoiceMakeUP";
import ProductChoiceLipstick from "./choix/ProductChoiceLipstick";
import ChatStart from "./ChatStart";


const botName = "Botéal";
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
      backgroundColor: "#396d57",
    },

    widget: {
      width: "30px",
    },
  },

  widgets: [
    {
      widgetName: "Let Start",
      widgetFunc: (props) => <ChatStart {...props} />,
    },
    {
      widgetName: "makeUp",
      widgetFunc: (props) => <ProductChoiceMakeup {...props} />,
    },
    {
      widgetName: "lipStick",
      widgetFunc: (props) => <ProductChoiceLipstick {...props} />,
    },
    //  {
    //   widgetName: "Let End",
    //   widgetFunc: (props) => <ChatEnd {...props} />,
    // },
  ],
};

export default config;
