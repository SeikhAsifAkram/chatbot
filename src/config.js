import { createChatBotMessage } from "react-chatbot-kit";
import DogPicture from "./DogPicture/DogPicture.jsx";

const botName = "ChatBot";

const config = {
  initialMessages: [
    createChatBotMessage(`Hi!Welcome to Mplussoft`),
    createChatBotMessage("One stop solution to all your digital needs"),
  ],
  widgets: [
    {
      widgetName: "dogPicture",
      widgetFunc: (props) => <DogPicture {...props} />,
    },
  ],
  botName: botName,
  customStyles: {
    botMessageBox: {
      backgroundColor: "#376B7E",
    },
    chatButton: {
      backgroundColor: "#5ccc9d",
    },
  },
};

export default config;
