import React from "react";
import { Route, Routes } from "react-router-dom";

import Login from "./Pages/RegisterLogin/Login";
import Register from "./Pages/RegisterLogin/Register";

import SingleChat from "./Pages/SingleChat/SingleChat";
import AllChats from "./Pages/AllChats/ChatsPage";

import UserPage from "./Pages/UserPage/UserPage";
import FirstPage from "./Pages/AllChats/FirstPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/single" element={<SingleChat />}></Route>
        <Route path="/allchat" element={<AllChats />}></Route>
        <Route path="/userme" element={<UserPage />}></Route>
        <Route path="/chatPage"  element={<FirstPage />}></Route>
      </Routes>
    </>
  );
}

export default App;
