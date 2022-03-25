import React, { useState } from "react";
import loginImg from "./img.svg";
import "./style.scss";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  function onSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    fetch("https://telegram-alisherjon-api.herokuapp.com/auth", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        const token = data.token;
        console.log(token)
        localStorage.setItem("TOKEN", JSON.stringify(token));
      });
  }

  return (
    <div className="form-container">
      <form onSubmit={onSubmit} className="content">
        <div className="header">
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
