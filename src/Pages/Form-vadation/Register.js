import React from "react";
import { useNavigate } from "react-router-dom";
import loginImg from "./img.svg";

function Register() {

  const navigate = useNavigate()

 function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    console.log(data);
    fetch("https://telegram-alisherjon-api.herokuapp.com/users", {
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
        if (data.message === "User Already Exists") {
          alert("User Already Exists! Please choose another username!!!😁");
        }
          localStorage.setItem("TOKEN", token);
        const token2 = localStorage.getItem("TOKEN")
        console.log(token2);
        if(token) {
          navigate("/allchat")
        }
      });
  }


  return (
    <div>
       <div className="form-container">
          <form onSubmit={handleSubmit} className="content">
          <div className="header">
            <h4>Register</h4>
          </div>
            <div className="img">
              <img src={loginImg} alt="img" />
            </div>
            <div className="form">
              <div className="form-group">
                <label htmlFor="Name">Name</label>
                <input type="text" name="name" id="Name" placeholder="Name" />
              </div>
              <div className="form-group">
                <label htmlFor="username">Username</label>
                <input type="text" name="username" placeholder="Username" />
              </div>
              <div className="form-group">
                <label htmlFor="number">Email</label>
                <input
                  type="number"
                  id="number"
                  name="phone"
                  placeholder="Phone"
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input type="password" name="password" placeholder="Password" />
              </div>
            </div>
            <div className="footer">
              <button className="form-btn">Register</button>
            </div>
          </form>
        </div>
    </div>
  )
}

export default Register