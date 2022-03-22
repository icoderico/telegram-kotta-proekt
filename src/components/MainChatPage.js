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
          <ul className="row sss justify-content-start  align-items-center ">
            <li className="col-11 justify-content-center d-flex align-items-center ">
              <i className="fas pe-3  fa-paperclip wordss"></i>
              <input
                className="ps-2  form-control"
                type="text"
                placeholder="Write a message"
              />
            </li>
            <li className="col-1 d-flex">
              <i class="fas fa-smile pe-4 wordss"></i>
              <i className="fas fa-microphone wordss"></i>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default MainChatPage;
