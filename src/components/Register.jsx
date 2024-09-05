import "../App.css";
import { useRef } from "react";
import { useState } from "react";
import React from "react";
import login from "../assets/login.jpeg";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function Register() {
  const nameElement = useRef();
  const userNameElement = useRef();
  const passwordElement = useRef();

  const [currentValue, setCurrentValue] = useState(true);

  // const registePage = () => {
  //   setCurrentValue(false);
  // };
  const navigate = useNavigate();

  const loginPageClick = (event) => {
    event.preventDefault();
    navigate("/");
  };
  const handleOnclick = (event) => {
    event.preventDefault();

    console.log("regiter button clicked");

    const nameE = nameElement.current.value;
    const userNameE = userNameElement.current.value;
    const passwordE = passwordElement.current.value;

    // to save data in a local storage
    localStorage.setItem(
      "user",
      JSON.stringify({ nameE, userNameE, passwordE })
    );

    //Clear the form inputs after saving
    nameElement.current.value = "";
    userNameElement.current.value = "";
    passwordElement.current.value = "";
    navigate("/");
  };

  return (
    <div className="registerPage">
      <form onSubmit={handleOnclick}>
        <div>
          <img src={login} alt="login image" />
        </div>
        <h1>Register Here</h1>
        <div className="inputDiv">
          <input
            type="text"
            placeholder="Enter Name"
            ref={nameElement}
            className="inputBox"
            required
          />
        </div>
        <div className="inputDiv">
          <input
            type="text"
            placeholder="Enter UserName"
            ref={userNameElement}
            className="inputBox"
            required
          />
        </div>
        <div className="inputDiv">
          <input
            type="password"
            placeholder="Enter Password"
            ref={passwordElement}
            className="inputBox"
            required
          />
        </div>

        <div className="inputDiv">
          <button className="btn btn-success">Register</button>
        </div>
      </form>
      <p>
        If already have an Account{" "}
        <button onClick={loginPageClick} className="btn btn-primary">
          Login Page
        </button>
      </p>
    </div>
  );
}
export default Register;
