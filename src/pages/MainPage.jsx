import React, { useContext } from "react";
import Home from "./Home";
import Login from "./Login";
import { UseUser } from "../context/UserContext";

const MainPage = () => {
  const { user } = UseUser();

  return <div className="text-center">{user ? <Home /> : <Login />}</div>;
};

export default MainPage;
