import React from "react";
import "./userpage.scss";

const UserPage = () => {
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
