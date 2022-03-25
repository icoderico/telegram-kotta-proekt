import axios from "axios";
import React from "react";
import "./userpage.scss";

const UserPage = () => {
  const token = localStorage.getItem("TOKEN");
  axios
    .get("https://telegram-alisherjon-api.herokuapp.com/users", {
      headers: {
        authorization: `Bearer ${token}`,
      },
    })
    .then((response) => console.log(response.data));
  return (
    <div className="userPage">
      <div className="userCard">
        <div className="header">
          <h2>Information</h2>
          <div>
            <i class="fa-solid fa-phone"></i>
            <i class="fa-solid fa-ellipsis-vertical"></i>
            <i class="fa-solid fa-circle-trash"></i>
          </div>
        </div>
        <div className="profile"></div>
        <div className="informations"></div>
        <div className="additinals"></div>
        <div className="footer"></div>
      </div>
    </div>
  );
};

export default UserPage;
