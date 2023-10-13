import React, { useContext, useEffect, useState } from "react";
import { createContext } from "react";

export const UserContext = createContext();

const CheckUser = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    localStorage.userData
      ? setUser(JSON.parse(localStorage.userData))
      : setUser(null);
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default CheckUser;

export const UseUser = () => {
  return useContext(UserContext);
};
