import React from "react";
import "./userpage.scss";
import UserImg from "./user-photo.jpg";
import axios from "axios";

const UserPage = () => {

  React.useEffect(() => {
   const token = localStorage.getItem("TOKEN")
    axios.get("https://telegram-alisherjon-api.herokuapp.com/users", {
      headers: {
        authorization: `Bearer ${token}`,
      },
    })
     .then( (data) => {

       console.log(data);
     } )
  }, [])

  return (
    <>
    <div className="userPage">
      <div className="userCard">

        <div className="userPageHeader">
          <h4>Settings</h4>
          <div className="userPageIcons">
            <i class="fa-solid fa-ellipsis-vertical"></i>
            <i class="fa-solid fa-delete-left"></i>
          </div>
        </div>

        <div className="userPageProfile">
          <div className="row align-items-center">
            <div className="col-3 ">
              <img src={UserImg} alt="" width={100} className="img" />
            </div>
            <div className="col-9">
              <div className="ms-4">
              <h5>Name Surname</h5>
              <p className="fw-lighter">Last seen recently</p>
              </div>
            </div>
          </div>
        </div>

        <div className="break"></div>

        <div className="userPageInformations">
          <div className="row">
            <div className="col-3 text-center">
              <i class="fa-solid fa-circle-info"></i>
            </div>
            <div className="col-9">
              <div className="userInfo">
                <h6>+998 (XX) XXX-XX-XX</h6>
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
          <i class="fa-solid fa-user"></i></div>
            </div>
            <h6 className="col-10">Change profile</h6>
          </div>
          <div className="row userIL">
          <div className="col-2 text-center">
            <div className="icon">
          <i class="fa-solid fa-bell"></i></div>
            </div>
            <h6 className="col-10">Nodifications</h6>
          </div>
          <div className="row userIL">
          <div className="col-2 text-center">
            <div className="icon">
          <i class="fa-solid fa-lock"></i></div>
            </div>
            <h6 className="col-10">Security</h6>
          </div>
          <div className="row userIL">
          <div className="col-2 text-center">
            <div className="icon">
          <i class="fa-solid fa-message"></i>
            </div>
            </div>
            <h6 className="col-10">Chat settings</h6>
          </div>
          <div className="row userIL">
          <div className="col-2 text-center">
            <div className="icon">
            <i class="fa-solid fa-folder-closed"></i>
            </div>
            </div>
            <h6 className="col-10">Folders</h6>
          </div>
          <div className="row userIL">
          <div className="col-2 text-center">
            <div className="icon">
            <i class="fa-solid fa-phone"></i>
            </div>
            </div>
            <h6 className="col-10">Call settings</h6>
          </div>
          <div className="row userIL">
          <div className="col-2 text-center">
            <div className="icon">
            <i class="fa-solid fa-earth-americas"></i>
            </div>
            </div>
            <h6 className="col-10">Language</h6>
          </div>
          </div>
          
        </div>
      </div>
    </>
  );
};

export default UserPage;
