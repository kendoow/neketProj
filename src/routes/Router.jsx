import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import UnPunlishedAdd from "../pageComponents/Main/UnPunlishedAdd/UnPunlishedAdd";
import UnPunlishedEdit from "../pageComponents/Main/UnPunlishedEdit/UnPunlishedEdit";
import Login from "../pages/Forms/Login/Login";
import SignIn from "../pages/Forms/SignIn/SignIn";
import Games from "../pages/Games/Games";
import Main from "../pages/Main/Main";
import Matches from "../pages/Matches/Matches";
import UnbublishedMatches from "../pages/Matches/UnbublishedMatches/UnbublishedMatches";
import UnbublishedNews from "../pages/Main/UnbublishedNews/UnbublishedNews";
import { AuthActionCreators } from "../redux/actionCreators/Auth/AuthActionCreator";
import MatchesAddItem from "../pageComponents/Macthes/MatchesAddItem/MatchesAddItem";
import MacthesEditItem from "../pageComponents/Macthes/MacthesEditItem/MacthesEditItem";

const Router = () => {
  const dispatch = useDispatch()
  const { isAuth } = useSelector((state) => state.auth);
  
  useEffect(() => {
    if (localStorage.getItem('auth')) {
      dispatch(AuthActionCreators.setIsAuth(true))
      dispatch(AuthActionCreators.setUserType(localStorage.getItem('userType')))
    }
  }, [])
  
  return isAuth ? (
    <Routes>
      <Route>
        <Route path="/" element={<Main />} />
        <Route path="/unpulishednews" element={<UnbublishedNews />} />
        <Route path = "/createPost" element ={<UnPunlishedAdd/>}/>
        <Route path = "/editPost" element ={<UnPunlishedEdit/>}/>
        <Route path="/games" element={<Games />} />
        <Route path="/matches" element={<Matches />} />
        <Route path="matches/unpulishedmatches" element={<UnbublishedMatches />} />
        <Route path = "/matches/unpulishedmatches/createMatch" element ={<MatchesAddItem/>}/>
        <Route path = "/editMatch" element ={<MacthesEditItem/>}/>
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
