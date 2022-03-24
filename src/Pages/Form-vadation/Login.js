import React, { useState } from "react";
import loginImg from "./img.svg";
import "./style.scss";

export default function Login() {
  function onSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    console.log(data);
    fetch("https://telegram-alisherjon-api.herokuapp.com/auth", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        const token = data.token;
        localStorage.setItem("TOKEN", token);
        const token2 = localStorage.getItem("TOKEN");
        console.log(token2);
      });
  }

  return (
    <div className="form-container">
      <form onSubmit={onSubmit} className="content">
        <div className="matn">
          <h4>Login</h4>
        </div>
        <div className="img">
          <img src={loginImg} alt="img" />
        </div>
        <div className="form">
          <div className="form-group">
            <label className="label" htmlFor="username">
              Username
            </label>
            <input type="text" name="username" placeholder="Username" />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" name="password" placeholder="Password" />
          </div>
        </div>
        <div className="footer">
          <button className="form-btn">Login</button>
        </div>
      </form>
    </div>
  );
}
