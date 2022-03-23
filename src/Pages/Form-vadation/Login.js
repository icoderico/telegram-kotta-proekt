import React from "react";
import loginImg from "./img.svg"

export class Login extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        username: "",
        password: "",
      };
      this.onSubmit = this.onSubmit.bind(this);
      this.onChange = this.onChange.bind(this);
    }
  
  
  
    onSubmit(e) {
      e.preventDefault();
      fetch("https://telegram-alisherjon-api.herokuapp.com/auth", {
        method: "POST",
        body: JSON.stringify(this.state),
        headers: {
            "Content-Type": "application/json"
        }
      })
        .then((res) => res.json())
        .then((data) => console.log(data) , console.log(this.state) 
        );
    }
  
    onChange(e) {
      this.setState({ [e.target.name]: e.target.value });
    }
  
    render() {
      return (
        <>
          <div ref={this.props.containerRef}>
            <h1 className="header">Login</h1>
            <form onSubmit={this.onSubmit} className="content">
              <div className="img">
                <img src={loginImg} alt="img" />
              </div>
              <div className="form">
                <div className="form-group">
                  <label className="label" htmlFor="username">
                    Username
                  </label>
                  <input
                    type="text"
                    name="username"
                    onChange={this.onChange}
                    placeholder="Username"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    name="password"
                    onChange={this.onChange}
                    placeholder="Password"
                  />
                </div>
              </div>
              <div className="footer">
                <button className="btn">Login</button>
              </div>
            </form>
          </div>
        </>
      );
    }
  }