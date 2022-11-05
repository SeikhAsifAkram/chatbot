import "react-chatbot-kit/build/main.css";
import config from "./config.js";
import MessageParser from "./MessageParser.jsx";
import ActionProvider from "./ActionProvider.jsx";
import Chatbot from "react-chatbot-kit";
import "./App.css";
import ChatBot from "./ChatBot/ChatBot.jsx";
import ChatBtn from "./ChatBtn/ChatBtn.jsx";

function App() {
  return (
    <div className="App">
      <ChatBtn />
      <ChatBot />
      {/* <Chatbot
        config={config}
        messageParser={MessageParser}
        actionProvider={ActionProvider}
      /> */}
    </div>
  );
}

export default App;
