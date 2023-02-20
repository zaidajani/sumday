import React from "react";
import './../css/style.login.css';
import { Link } from "react-router-dom";

export const Login = () => {
  return (
    <>
      <div className="App">
      <div className="navholder">
        <nav className="navbar">
          <div className="right">
            <Link to='/' className="brand">Sumday</Link>
          </div>
          <div className="left">
            <p className="logbutton">Login</p>
            <Link to="/register"><p className="logbutton">Register</p></Link>
          </div>
        </nav>
      </div>
      <div className="body">
        <div className="formholder">
          <p>Login yourself</p>
          <div className="form">
            <input type="text" placeholder="Name" className="inputclass"/>
            <input type="text" placeholder="Email" className="inputclass"/>
            <input type="password" placeholder="Password" className="inputclass"/>
          </div>
          <div className="loginbutton">Login</div>
        </div>
      </div>
    </div>
    </>
  )
}