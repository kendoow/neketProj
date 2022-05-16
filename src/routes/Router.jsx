import React from "react";
import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import Login from "../pages/Forms/Login/Login";
import SignIn from "../pages/Forms/SignIn/SignIn";
import Games from "../pages/Games/Games";
import Main from "../pages/Main/Main";
import Matches from "../pages/Matches/Matches";
import UnbublishedNews from "../pages/UnbublishedNews/UnbublishedNews";

const Router = () => {
  const { isAuth } = useSelector((state) => state.auth);
  console.log(isAuth)
  return isAuth ? (
    <Routes>
      <Route>
        <Route path="/" element={<Main />} />
        <Route path="/games" element={<Games />} />
        <Route path="/matches" element={<Matches />} />
        <Route path="/unpulishednews" element={<UnbublishedNews />} />
      </Route>
    </Routes>
  ) : (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/games" element={<Games />} />
      <Route path="/matches" element={<Matches />} />
      
      <Route path="/singin" element={<SignIn />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
};

export default Router;
