//Components
import Login from "./components/login";
import Register from "./components/Register";
import ProtectedRoute from "./components/ProtectedRoute";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React from "react";
import { useState } from "react";
import Layout from "./components/Layout";

// pages
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Profile from "./pages/Profile";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        <Route
          path="/Home"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
        <Route
          path="/Contact"
          element={
            <ProtectedRoute>
              <Contact />
            </ProtectedRoute>
          }
        />
        <Route
          path="/About"
          element={
            <ProtectedRoute>
              <About />
            </ProtectedRoute>
          }
        />
        <Route
          path="/Profile"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
}
export default App;
