import React, {useState} from "react";
import {Link} from 'react-router-dom'
import { useNavigate } from "react-router-dom"; 

const HomePage = () => {
  const token = localStorage.getItem("TOKEN")
  const [isSighnedUp, setIsSighnedUp] = useState(token)
  const navigate = useNavigate();

  if(token){
      navigate("/userme");
  }else{
    navigate("/login")
  }

  return (
    <section id="header">
      <div className="container">
        <div className="header  d-flex align-items-center justify-content-between">
          <div>
            <i className=" display-1 fab fa-telegram"></i>
          </div>
          <div className="d-flex gap-3">
            <Link to="/">Home</Link>
            <Link to="login">Login/Register</Link>
            <Link to="allchat">Allchat</Link>
            { isSighnedUp && <Link to="userme">User</Link> }
            <Link to="chatPage">Chat</Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomePage;
