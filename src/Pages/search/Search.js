import React, { useState } from "react";
import axios from "axios";

const Search = () => {
  const [userData, setUserData] = useState("");
  const [phoneData, setPhoneData] = useState("");
  const [friendId, setFriendId] = useState("");

  const token = localStorage.getItem("TOKEN");
  const handleSubmit = (e) => {
    console.log(token);
    e.preventDefault();
    const formData = new FormData(e.target);
    const body = Object.fromEntries(formData.entries());
    const username = body.username;
    console.log(body, username);
    axios
      .get(`https://telegram-alisherjon-api.herokuapp.com/users/${username}`, {
        headers: {
          authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        const { data } = response;
        const { username, phone, _id } = data.user;
        console.log(data.user);
        setUserData(username);
        setPhoneData(phone);
        setFriendId(_id);
      });
  };
  console.log(phoneData);

  console.log(friendId);
  const handleClick = () => {
    axios
      .post(`https://telegram-alisherjon-api.herokuapp.com/chats`, {
        headers: {
          authorization: `Bearer ${token}`,
          // "Content-Type": "application/json",
        },
        body:  JSON.stringify(friendId),
      })
      .then((response) => {
        console.log(response.data);
      });
  };

  // const handleClick = () => {
  //   fetch("https://telegram-alisherjon-api.herokuapp.com/chats", {
  //     method: "POST",
  //     body: JSON.stringify(friendId),
  //     headers: {
  //       authorization: `Bearer ${token}`,
  //       // "Content-Type": "application/json",
  //     },
  //   })
  //     .then((res) => res.json())
  //     .then((data) => console.log(data));
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
        <ul>
          <li onClick={handleClick}>
            {userData} {phoneData}
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Search;
