







import React from "react";
import loginImg from "./img.svg"

export class Register extends React.Component{

    render(){
        return(
            <>
            <div ref={this.props.containerRef}>
                <h1 className="header">Register</h1>
                <div className="content">
                    <div className="img">
                        <img src={loginImg} alt="img" />
                    </div>
                    <div className="form">
                        <div className="form-group">
                            <label htmlFor="username">Username</label>
                            <input type="text" name="username" placeholder="Username" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input type="email" name="email" placeholder="Email" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input type="password" name="password" placeholder="Password" />
                        </div>
                    </div>
                    <div className="footer">
                        <button className="btn">Register</button>
                    </div>
                </div>
            </div>
            </>
        )
    }

}