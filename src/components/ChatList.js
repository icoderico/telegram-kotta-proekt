import React from "react";
import axios from "axios";
// import { Link } from "react-router-dom";

// const data = new Date();
// const today = data.getDate();
// const month = data.getMonth();
// const year = data.getFullYear();
// const day = data.getDay();

const ChatList = () => {
  const handleSubmit = (e) => {
    const token = localStorage.getItem("TOKEN")
    console.log(token);
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    const username = data.username;
    console.log(data, username);
    axios.get(`https://telegram-alisherjon-api.herokuapp.com/users/${username}`, {
      headers: {
        authorization: `Bearer ${token}`,
      }
    }).then(response => {
      console.log(response.data);
    })
  };

  

  return (
    <section id="chatList">
      <form onSubmit={handleSubmit}>
        <input type="text" name="username" placeholder="search" />
        <button type="submit">search</button>
      </form>
      <ul>
        <li></li>
      </ul>
    </section>
  );
};

export default ChatList;
