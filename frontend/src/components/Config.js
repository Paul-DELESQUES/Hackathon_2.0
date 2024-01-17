import { createChatBotMessage } from "react-chatbot-kit";

const config = {
  botName: "Lor&Al",
  initialMessages: [
    createChatBotMessage("Bonjour, je suis votre assistant shop l'Oréal "),
  ],
  customStyles: {
    botMessageBox: {
      backgroundColor: "#376B7E",
    },
    chatButton: {
      backgroundColor: "#376B7E",
    },
  },
};

export default config;
