import React from "react";
import { NavLink } from "react-router-dom";
import "./Homepage.css";

const Homepage = () => {
  return (
    <div className="home-content">
      <div className="landing-content">
        <h1>Welcome to Code Coast Virtual Classroom</h1>
        <p>
          Enroll in any of our training programmes and develop yourself for
          today world.
        </p>
        <div className="home-btn">
          <NavLink to="/login">
            <button className ='login-home-btn'>Login</button>
          </NavLink>
          <NavLink to="/about">
            <button className = "login-home-btn">About Us</button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
