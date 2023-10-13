import React, { useContext, useState } from "react";
import Button from "react-bootstrap/Button";
import { UserContext } from "../context/UserContext";
import MainStore from "../context/MainStore";
const Login = () => {
  const [userName, setUserName] = useState("");
  const [userPassword, setUserPassword] = useState("");

  const { setUser } = useContext(UserContext);

  const handleForm = (e) => {
    e.preventDefault();

    if (userName === "hesham") {
      const userData = { userName, userPassword, role: "admin" };
      localStorage.userData = JSON.stringify(userData);
      setUser(userData);
    } else {
      const userData = { userName, userPassword, role: "member" };
      localStorage.userData = JSON.stringify(userData);
      setUser(userData);
    }
  };

  return (
    <div>
      <h1>Login-Page</h1>
      <form
        onSubmit={handleForm}
        className="d-flex flex-column justify-content-center align-items-center p-4 bg-secondary rounded text-light"
      >
        <label>User Name</label>
        <input
          type="text"
          value={userName}
          onChange={(e) => setUserName(e.currentTarget.value)}
        />
        <label>Password</label>
        <input
          type="password"
          value={userPassword}
          onChange={(e) => setUserPassword(e.currentTarget.value)}
        />
        <Button variant="primary" type="submit">
          Login
        </Button>
      </form>
    </div>
  );
};

export default Login;
