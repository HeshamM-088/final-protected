import React from "react";
import { UseUser } from "./context/UserContext";
import { Navigate } from "react-router-dom";

const CheckAdmin = ({ children }) => {
  const { user } = UseUser();

  if (user) {
    if (user.role !== "admin") return <Navigate to="/" />;
  }

  return children;
};

export default CheckAdmin;
