import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login, logout } from "../reducers/user.reducer";

const Login = () => {
  const [newUserName, setNewUserName] = useState("");
  const dispatch = useDispatch();
  const username = useSelector((state) => state.userInfo.username);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login(newUserName));
    console.log("Submitted", newUserName);
  };

  const logoutHandler = () => {
    dispatch(logout());
    console.log("Logged out");
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="UserName To Display"
          onChange={(e) => setNewUserName(e.target.value)}
        />
        <button>Submit</button>
      </form>
      <button onClick={logoutHandler}>LOGOUT</button>
      <h4>{!username ? "Username will be pop here." : username}</h4>
    </>
  );
};

export default Login;
