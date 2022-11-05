import React, { useState } from "react";
import ChatBot from "../ChatBot/ChatBot";
import "./ChatBtn.css";

const ChatBtn = () => {
  const [clickState, setClickState] = useState(false);
  //   const handleClick = () => {
  //     console.log("hjh");
  //     setClickState(true);
  //   };

  const handleClick = () => {
    const btnSelect = document.getElementById("chat-bot-container");
    if (clickState == false) {
      btnSelect.classList.add("scale_in_bl");
      btnSelect.classList.remove("chat-bot-container");

      btnSelect.classList.add("chat_bot_container_display");
      setClickState(true);
    } else {
      btnSelect.classList.remove("chat_bot_container_display");
      btnSelect.classList.add("chat-bot-container");
      //   btnSelect.classList.add("scale-out-bl");
      setClickState(false);
    }
  };

  //   setClickState(!clickState);
  //   var element = document.getElementById("chat-bot-container");
  //   if (clickState == true) {
  //     element.classList.add("scale-in-bl");
  //   } else {
  //     element.classList.remove("scale-in-bl");
  //   }
  // };

  return (
    <>
      <div className="btn-container" id="btn">
        <img
          onClick={handleClick}
          src="https://cdn0.iconfinder.com/data/icons/kameleon-free-pack-rounded/110/Chat-2-512.png"
          alt=""
        />
      </div>
      {/* {clickState && console.log("sdkfj")} */}
    </>
  );
};

export default ChatBtn;
