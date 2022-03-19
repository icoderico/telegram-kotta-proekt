import React from "react";

const MainChatPage = () => {
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);
  return (
    <section id="mainChatPage">
      <div className="container">
        <div
          className="top vh-100"
          style={{ backgroundColor: randomColor + "#" }}
        ></div>
      </div>
    </section>
  );
};

export default MainChatPage;
