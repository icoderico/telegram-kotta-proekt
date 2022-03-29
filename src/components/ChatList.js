import React, { useEffect, useState } from "react";
import axios from "axios";
// import { Link } from "react-router-dom";

// const data = new Date();
// const today = data.getDate();
// const month = data.getMonth();
// const year = data.getFullYear();
// const day = data.getDay();

const ChatList = () => {
  const token = localStorage.getItem("TOKEN");
  const [chats, setChats] = useState([]);
  const [myId, setMyId] = useState("");
  // const [allChat, setAllChat] = useState([]);
  // const [myFriend, setMyFriend] = useState({});

  useEffect(() => {
    axios
      .get("https://telegram-alisherjon-api.herokuapp.com/users", {
        headers: {
          authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        console.log(res.data);
        const allChats = res.data.user.chats;
        console.log(allChats);
        setChats(res.data.user.chats);
        setMyId(res.data.user._id);
        console.log(res.data.user.chats);
      });
  }, [token]);

  chats.map((chat) => {
    console.log(chat.members);
  })
// console.log(members);



  return (
    <section id="chatList">
      <ul></ul>
    </section>
  );
};

export default ChatList;
