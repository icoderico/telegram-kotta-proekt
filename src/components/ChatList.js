import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const ChatList = () => {
  const token = localStorage.getItem("TOKEN");
  const [chats, setChats] = useState([]);
  const [myId, setMyId] = useState("");

  useEffect(() => {
    axios
      .get("https://telegram-alisherjon-api.herokuapp.com/users", {
        headers: {
          authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        const allChats = res.data.user.chats;
        setChats(allChats);
        setMyId(res.data.user._id);
      });
  }, [token]);

  return (
    <section id="chatList">
      <ul>
        {chats.map((chat, index) => {
          const { members } = chat;
          const friend = members.find((member) => member._id !== myId);
          return (
            <li key={index}>
              <Link className="text-decoration-none text-dark fs-5" to={`/chatPage/${chat._id}`}>
                <p>{friend.name}</p>
                <small>{friend.phone}</small>
              </Link>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default ChatList;
