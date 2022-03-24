import React from "react";
import "./userpage.scss";

const UserPage = () => {
  return (
    <section id="user" className="d-flex justify-content-center">
      <div className="container1 bg-danger">
        <div className="container2">
          <div id="head" className="d-flex">
            <div className="head-left">
              <a href="#info">Information</a>
            </div>
            <div className="head-right">
              <ul className="d-flex">
                <li>
                  <a href="#phone">
                    <i class="fa-solid fa-phone"></i>
                  </a>
                </li>
                <li>
                  <a href="#menu">
                    <i class="fa-solid fa-ellipsis-vertical"></i>
                  </a>
                </li>
                <li>
                  <a href="#sm">
                    <i class="fa-solid fa-xmark"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div id="photo">
            <div className="photo-img">
              <img
                src="https://eitrawmaterials.eu/wp-content/uploads/2016/09/person-icon.png"
                alt=""
              />
              <div className="name">
                <h2>User</h2>
                <p>online</p>
              </div>
            </div>
          </div>
          <div id="row1">
            <i class="fa-solid fa-circle-info"></i>
            <div className="row1-info">
              <p className="fir">@qewrreq.</p>
              <p className="sec">User name</p>
            </div>
          </div>
          <div id="row2">
            <div className="lll">
              <i class="fa-regular fa-bell"></i>
              <p className="row2-title">Notifications</p>
            </div>
            <label htmlFor="switch">
              <input type="checkbox" />
              <span className="slider round"></span>
            </label>
          </div>
          <div id="bio">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus
            incidunt architecto recusandae perferendis, ab necessitatibus sequi
            molestias! Quasi modi quos, reiciendis sint minima, sit inventore
            error eum blanditiis vitae nihil!
          </div>
          <div id="massage">
            <a href="#message">Send a massage</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UserPage;
