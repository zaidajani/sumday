import React from "react";
import "./../css/style.home.css";
import { Link } from "react-router-dom";

export const HomeScreen = () => {
  return (
    <div className="App">
      <div className="navholder">
        <nav className="navbar">
          <div className="right">
            <p className="brand">Sumday</p>
          </div>
          <div className="left">
            <Link className="logbutton" to="/login">
              Login
            </Link>
            <Link className="logbutton" to="/register">
              Register
            </Link>
          </div>
        </nav>
      </div>
    </div>
  );
};
