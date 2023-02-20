import React from "react";
import { Link } from "react-router-dom";
import './../css/style.login.css';

export const Register = () => {
  return (
    <div className="App">
      <div className="navholder">
        <nav className="navbar">
          <div className="right">
            <Link to='/' className="brand">Sumday</Link>
          </div>
          <div className="left">
            <Link to="/login"><p className="logbutton">Login</p></Link>
            <p className="logbutton">Register</p>
          </div>
        </nav>
      </div>
      <div className="body">
        <div className="formholder">
          <p>Register yourself</p>
          <div className="form">
            <input type="text" placeholder="Name" className="inputclass"/>
            <input type="text" placeholder="Email" className="inputclass"/>
            <input type="password" placeholder="Password" className="inputclass"/>
          </div>
          <div className="loginbutton">Register</div>
        </div>
      </div>
    </div>
  );
}
