import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import login from "../assets/login.jpeg";
import React from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const storedUserData = JSON.parse(localStorage.getItem("user"));

  let [UserName, setUserName] = useState("");
  let [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleRegisterNavigation = () => {
    navigate("/Register");
  };

  const handleOnChangeUser = (event) => {
    let value = event.target.value;
    setUserName(value);
  };

  const handleOnChangePass = (event) => {
    setPassword(event.target.value);
  };

  const handleReset = () => {
    setUserName("");
    setPassword("");
  };

  const navigate = useNavigate();
  const checkUserDetails = (event) => {
    if (
      storedUserData.userNameE === UserName &&
      storedUserData.passwordE === password
    ) {
      setIsLoggedIn(true);
      event.preventDefault();

      const token = "dummy auth authToken";
      localStorage.setItem("authToken", token);

      navigate("/Home");
    } else {
      alert("Please enter valid username or password");
      handleReset();
    }
  };

  return (
    <div className="loginPage">
      <div>
        <img src={login} alt="login image" />
      </div>
      <h1>Login Page </h1>
      <form onSubmit={checkUserDetails}>
        <div className="inputDiv">
          <input
            type="text"
            placeholder="Enter UserName"
            className="inputBox"
            onChange={handleOnChangeUser}
            value={UserName}
            required
          ></input>
        </div>

        <div className="inputDiv">
          <input
            type="password"
            placeholder="Enter Password"
            className="inputBox"
            onChange={handleOnChangePass}
            value={password}
            required
          ></input>
        </div>

        <div>
          <button className="btn btn-success button">Login</button>
        </div>
      </form>
      <button onClick={handleReset} className="btn btn-danger button">
        Reset
      </button>

      <p>
        If Don't have an Account{" "}
        <button className="btn btn-primary" onClick={handleRegisterNavigation}>
          Register
        </button>
      </p>
    </div>
  );
}
export default Login;
