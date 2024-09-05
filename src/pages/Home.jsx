import React from "react";
import Navbar from "../components/Navbar";
const Home = () => {
  const storedUserData = JSON.parse(localStorage.getItem("user"));

  return (
    <>
      <Navbar></Navbar>
      <h2>{`Hi ${storedUserData.nameE}`}</h2>
      <h1>This is my Home Page</h1>;
    </>
  );
};
export default Home;
