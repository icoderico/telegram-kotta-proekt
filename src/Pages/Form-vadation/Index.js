import React, { useState } from "react";
import Login from "./Login";
import Register from "./Register";
import "./style.scss";

function Account() {
  const [isRight, setIsRight] = useState(false);
  return (
    <div>
      <div className="login-reg">
        <div>
          {isRight && <Login />}
          {!isRight && <Register />}
        </div>
        <div className={`right-side ${ !isRight? "right" : "left" }`}>
          <div className="">
            <div onClick={() => setIsRight(!isRight)} className="text"> 
              { isRight ? "Register" : "Login" }
             </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Account;
