import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Search = () => {
  const [mainData, setMaindata] = useState([]);
  const [userData, setUserData] = useState("");
  const [phoneData, setPhoneData] = useState("");
  const [friendId, setFriendId] = useState("");

  const navigate = useNavigate();

  const token = localStorage.getItem("TOKEN");
  const handleSubmit = (e) => {
    // console.log(token);
    e.preventDefault();
    const formData = new FormData(e.target);
    const body = Object.fromEntries(formData.entries());
    const username = body.username;
    // console.log(body, username);
    axios
      .get(`https://telegram-alisherjon-api.herokuapp.com/users/${username}`, {
        headers: {
          authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        const { data } = response;
        const { username, phone, _id } = data.user;
        // console.log(data.user);
        setMaindata(data);
        setUserData(username);
        setPhoneData(phone);
        setFriendId(_id);
        console.log(mainData, data);
      });
  };
  // console.log(phoneData);

  const handleClick = () => {
    axios
      .post(
        `https://telegram-alisherjon-api.herokuapp.com/chats`,
        {
          friendId,
        },
        {
          headers: {
            authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      )
      .then((response) => {
        const id = response.data.chat._id;
        localStorage.setItem("chatId", id)
        navigate(`/ChatPage/${id}`);
      });
  };

  // const handleClick = () => {
  //  console.log(123);
  // };

  return (
    <section id="search">
      <div className="container py-3">
        <form onSubmit={handleSubmit} className="w-100 text-center">
          <input
            name="username"
            className="form-control-lg  inputSearch text-center rounded-pill w-50"
            type="search"
            placeholder="🔍  Search..."
          />
          <button type="submit" className="buttonSearch">
            Go
          </button>
        </form>
        <ul className="userUl">
          <li className="userLi border border-solid rounded-pill px-4 ">
            <p>
              {userData} {phoneData}
            </p>
            <button onClick={handleClick}>Go Chat</button>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Search;
