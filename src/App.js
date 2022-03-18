import React from "react";
import { Route, Routes } from "react-router-dom";

import Login from "./Pages/RegisterLogin/Login";
import Register from "./Pages/RegisterLogin/Register";

import SingleChat from "./Pages/SingleChat/SingleChat";
import AllChats from "./Pages/AllChats/AllChatsPage";

import UserPage from "./Pages/UserPage/UserPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="single" element={<SingleChat />} />
        <Route path="allchat" element={<AllChats />} />
        <Route path="userme" element={<UserPage />} />
      </Routes>
    </>
  );
}

export default App;
