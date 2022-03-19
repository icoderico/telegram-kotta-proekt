import React from "react";

const MainChatPage = () => {
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);
  return (
    <section id="mainChatPage">
      <div className="container">
        <div
          className="top w-100"
          style={{ backgroundColor: "#" + randomColor }}
        ></div>
        <div className="bottom  w-100">
          <ul className="row  align-items-center ">
            <li className="col-11  d-flex align-items-center justify-content-between">
              <i className="fas fa-paperclip"></i>
              <input
                className="form-control"
                type="text"
                placeholder="Write a message"
              />
            </li>
            <li className="col-1 d-flex justify-content-between">
              <i class="fas fa-smile"></i>
              <i className="fas fa-microphone"></i>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default MainChatPage;
