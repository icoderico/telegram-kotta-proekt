import React from "react";
import { Route, Routes } from "react-router-dom";
import SingleChat from "./Pages/SingleChat/SingleChat";
import AllChats from "./Pages/AllChats/ChatsPage";
import UserPage from "./Pages/UserPage/UserPage";
import Account from "./Pages/Form-vadation/Index"
import FirstPage from "./Pages/AllChats/FirstPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="login" element={<Account />} />
        <Route path="single" element={<SingleChat />} />
        <Route path="allchat" element={<AllChats />} />
        <Route path="userme" element={<UserPage />} />
        <Route path="/chatPage"  element={<FirstPage />}></Route>
      </Routes>
    </>
  );
}

export default App;
