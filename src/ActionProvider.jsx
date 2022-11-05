import React from "react";

const ActionProvider = ({ createChatBotMessage, setState, children }) => {
  const handleHello = () => {
    const botMessage = createChatBotMessage("Hello. Nice to meet you.");

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  const handlePricing = () => {
    const botMessage = createChatBotMessage(
      "For pricing and offers check our websites Pricing section"
    );

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  const handleLocation = () => {
    const botMessage = createChatBotMessage(`501/502, 5th Floor, Niche Facade, 
                                            New Airport Rd, Viman Nagar, 
                                            Pune, Maharashtra 411014`);
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  const handleDog = () => {
    const botMessage = createChatBotMessage(
      "Here's a nice dog picture for you!",
      {
        widget: "dogPicture",
      }
    );

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          actions: {
            handleHello,
            handleDog,
            handlePricing,
            handleLocation,
          },
        });
      })}
    </div>
  );
};

export default ActionProvider;
