import axios from "axios";
import React, { useState } from "react";
import "./userpage.scss";
import UserImg from "./user-photo.jpg";
import { useNavigate } from "react-router-dom";

const UserPage = () => {
  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useState(null);
  const parsed = JSON.parse(localStorage.getItem("user-info"));

  React.useEffect(() => {
    const token = localStorage.getItem("TOKEN");
    axios
      .get("https://telegram-alisherjon-api.herokuapp.com/users", {
        headers: {
          authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        const { user, name } = response.data;
        setUserInfo(user);
        const nimadir = localStorage.setItem("user-info", JSON.stringify(user));
      });
  }, []);

  function LogOut() {
    localStorage.removeItem("user-info");
    localStorage.removeItem("TOKEN");
    navigate("/login");
  }

  function Start() {
    navigate("/search");
  }

  return (
    <>
      <div className="userPage">
        <div className="userCard">
          <div className="userPageHeader">
            <h4> Settings </h4>
            <div className="startbu" onClick={Start}>Start Messaging</div>
            <div className="userPageIcons">
              <i
                onClick={LogOut}
                className="fa-solid fa-arrow-right-from-bracket"
              ></i>
              <i className="fa-solid fa-ellipsis-vertical"></i>
            </div>
          </div>

          <div className="userPageProfile">
            <div className="row align-items-center">
              <div className="col-3 ">
                <img src={UserImg} alt="" width={100} className="img" />
              </div>
              <div className="col-9">
                <div className="ms-4">
                  {userInfo && <h5> {userInfo.name} </h5>}
                  <p className="fw-lighter">Last seen recently</p>
                </div>
              </div>
            </div>
          </div>

          <div className="break"></div>

          <div className="userPageInformations">
            <div className="row">
              <div className="col-3 text-center">
                <i className="fa-solid fa-circle-info"></i>
              </div>
              <div className="col-9">
                <div className="userInfo">
                  {userInfo && <h6> {userInfo.phone} </h6>}
                  <p className="fw-lighter small">Phone Number</p>
                </div>
                <div className="userInfo">
                  <h6>Life goes on</h6>
                  <p className="fw-lighter small">About me</p>
                </div>
                <div className="userInfo">
                  <h6>Web-developer</h6>
                  <p className="fw-lighter small">User Name</p>
                </div>
              </div>
            </div>
          </div>

          <div className="break"></div>

          <div className="userPageAdditinals">
            <div className="row userIL">
              <div className="col-2 text-center">
                <div className="icon">
                  <i className="fa-solid fa-user"></i>
                </div>
              </div>
              <h6 className="col-10">Change profile</h6>
            </div>
            <div className="row userIL">
              <div className="col-2 text-center">
                <div className="icon">
                  <i className="fa-solid fa-bell"></i>
                </div>
              </div>
              <h6 className="col-10">Nodifications</h6>
            </div>
            <div className="row userIL">
              <div className="col-2 text-center">
                <div className="icon">
                  <i className="fa-solid fa-lock"></i>
                </div>
              </div>
              <h6 className="col-10">Security</h6>
            </div>
            <div className="row userIL">
              <div className="col-2 text-center">
                <div className="icon">
                  <i className="fa-solid fa-message"></i>
                </div>
              </div>
              <h6 className="col-10">Chat settings</h6>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserPage;
