import React from "react";
import "react-chatbot-kit/build/main.css";
import config from "../config.js";
import MessageParser from "../MessageParser.jsx";
import ActionProvider from "../ActionProvider.jsx";
import Chatbot from "react-chatbot-kit";

import "./ChatBot.css";
import ChatBtn from "../ChatBtn/ChatBtn.jsx";

const ChatBot = () => {
  return (
    <>
      {/* <ChatBtn /> */}
      <div
        className=" chat-bot-container "
        id="chat-bot-container"
      >
        <Chatbot
          config={config}
          messageParser={MessageParser}
          actionProvider={ActionProvider}
        />
      </div>
    </>
  );
};

export default ChatBot;
