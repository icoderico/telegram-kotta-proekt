import React from "react";
import { Route, Routes, Link } from "react-router-dom";
// import SingleChat from "./Pages/SingleChat/SingleChat";
import Chatpage from "./Pages/AllChats/ChatsPage";
import UserPage from "./Pages/UserPage/UserPage";
import Account from "./Pages/Form-vadation/Index";
import FirstPage from "./Pages/AllChats/FirstPage";
import HomePage from "./Pages/HomePage/HomePage";
import Search from "./Pages/search/Search";

function App() {
  return (
    <>
     <Search/>
      <Routes>
        <Route path="" element={<HomePage />} />
        <Route path="login" element={<Account />} />
        <Route path="search" element={<Search />} />
        {/* <Route path="single" element={<SingleChat />} /> */}
        <Route path="allchat" element={<FirstPage />} />
        <Route path="userme" element={<UserPage />} />
        <Route path="chatPage/:id" element={<Chatpage />}></Route>
      </Routes>
    </>
  );
}

export default App;
