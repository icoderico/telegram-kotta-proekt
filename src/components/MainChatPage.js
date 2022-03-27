import axios from "axios";
import React from "react";
import { useParams } from "react-router-dom";

const MainChatPage = () => {
  const token = localStorage.getItem("TOKEN");
  const { chatId } = useParams();

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const text = Object.fromEntries(formData.entries());
    console.log(text);
    console.log(chatId);
    axios
      .post(
        "https://telegram-alisherjon-api.herokuapp.com/messages",
        {
          text,
          chatId,
        },
        {
          headers: {
            authorization: `bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      )
      .then((response) => {
        console.log(response.data);
      });
  };

  const randomColor = Math.floor(Math.random() * 16777215).toString(16);
  return (
    <section id="mainChatPage">
      <div className="container">
        <div
          className="top w-100"
          style={{ backgroundColor: "#" + randomColor }}
        >
          <ul>
            <li>
              <p className="text-dark py-2 px-4 bg-light rounded-pill ">
                diyor
              </p>
            </li>
          </ul>
        </div>
        <div className="bottom  w-100">
          <ul className="row sss justify-content-start  align-items-center ">
            <li className="col-11 justify-content-center d-flex align-items-center ">
              <i className="fas pe-3  fa-paperclip wordss"></i>
              <form onSubmit={handleSubmit} className="w-100">
                <input
                  className="ps-2 w-100  form-control"
                  type="text"
                  placeholder="Write a message"
                />
              </form>
            </li>
            <li className="col-1 d-flex">
              <i className="fas fa-smile pe-4 wordss"></i>
              <i className="fas fa-microphone wordss"></i>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default MainChatPage;
