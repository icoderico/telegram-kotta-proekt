import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const MainChatPage = () => {
  const token = localStorage.getItem("TOKEN");
  const { chatId } = useParams();
  const [textt, setTextt] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const { text } = Object.fromEntries(formData.entries());
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
            authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      )
      .then((response) => {
        console.log(response.data);
      });
  };

  useEffect(() => {
    axios
      .get(`https://telegram-alisherjon-api.herokuapp.com/chats/${chatId}`, {
        headers: {
          authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        axios
          .get("https://telegram-alisherjon-api.herokuapp.com/users", {
            headers: {
              authorization: `Bearer ${token}`,
            },
          })
          .then((response) => {
            const mey = response.data.user;
            // console.log(res.data.chat.messages);
            const { members } = res.data.chat;
            const friend = members.find((member) => member._id !== mey._id);
            console.log(friend);
            const { messages } = res.data.chat;
            console.log(messages);
            const myText = messages.find((message) => message.from === mey._id);
            setTextt(myText.text);
            const hisText = messages.find(
              (message) => message.from === friend._id
            );
            console.log(hisText.text);
            console.log(mey._id);
          });
      });
  }, [chatId, token]);
  console.log(textt);

  const randomColor = Math.floor(Math.random() * 16777215).toString(16);
  return (
    <section id="mainChatPage">
      <div className="container">
        <div
          className="top w-100"
          style={{ backgroundColor: "#" + randomColor }}
        >
          <ul>
            <div>
              <li className="right float-end">Diyor</li>
            </div>
            <div>
              <li className="left float-start">Diyor</li>
            </div>
          </ul>
        </div>
        <div className="bottom  w-100">
          <ul className="row sss justify-content-start  align-items-center ">
            <li className="col-11 justify-content-center d-flex align-items-center ">
              <i className="fas pe-3  fa-paperclip wordss"></i>
              <form onSubmit={handleSubmit} className="w-100">
                <input
                  className="ps-2 w-100  form-control"
                  name="text"
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
