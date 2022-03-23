import React from "react";
import { Route, Routes, Link } from "react-router-dom";
import SingleChat from "./Pages/SingleChat/SingleChat";
import AllChats from "./Pages/AllChats/ChatsPage";
import UserPage from "./Pages/UserPage/UserPage";
import Account from "./Pages/Form-vadation/Index"
import FirstPage from "./Pages/AllChats/FirstPage";
import Login from "./Pages/Form-vadation/Login";

function App() {
  return (
    <>
    <div className="header">
      <Link to="/">Home</Link>
      <Link to="login">Login/Register</Link>
      <Link to="allchat">Allchat</Link>
      <Link to="userme">User</Link>
      <Link to="chatPage">Chat</Link>
    </div>
      <Routes>
        <Route path="login" element={<Account/> } />
        <Route path="single" element={<SingleChat />} />
        <Route path="allchat" element={<FirstPage />} />
        <Route path="userme" element={<UserPage />} />
        <Route path="chatPage"  element={<AllChats />}></Route>
      </Routes>
    </>
  );
}

export default App;
