import React from "react";
import { Route, Routes } from "react-router-dom";
import SingleChat from "./Pages/SingleChat/SingleChat";
import AllChats from "./Pages/AllChats/AllChatsPage";
import UserPage from "./Pages/UserPage/UserPage";
import Account from "./Pages/Form-vadation/Index"

function App() {
  return (
    <>
      <Routes>
        <Route path="login" element={<Account />} />
        <Route path="single" element={<SingleChat />} />
        <Route path="allchat" element={<AllChats />} />
        <Route path="userme" element={<UserPage />} />
      </Routes>
    </>
  );
}

export default App;
