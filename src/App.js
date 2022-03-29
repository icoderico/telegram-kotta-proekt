import React, {useEffect} from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
// import SingleChat from "./Pages/SingleChat/SingleChat";
import Chatpage from "./Pages/AllChats/ChatsPage";
import UserPage from "./Pages/UserPage/UserPage";
import Account from "./Pages/Form-vadation/Index";
import FirstPage from "./Pages/AllChats/FirstPage";
import HomePage from "./Pages/HomePage/HomePage";
import Search from "./Pages/search/Search";

function App() {
  const token = localStorage.getItem('TOKEN')
  const navigate = useNavigate()

  useEffect(() =>{
    if(token){
      navigate("/userme")
    }else{
      navigate('/login')
    }

  }, [])

  return (
    <>
      <Routes>
        {/* <Route path="" element={<HomePage />} /> */}
        <Route path="login" element={<Account />} />
        <Route path="search" element={<Search />} />
        {/* <Route path="single" element={<SingleChat />} /> */}
        <Route path="allchat" element={<FirstPage />} />
        <Route path="userme" element={<UserPage />} />
        <Route path="chatPage/:chatId" element={<Chatpage />}></Route>
      </Routes>
    </>
  );
}

export default App;
