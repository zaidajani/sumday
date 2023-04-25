import React, { useState } from "react";
import "./../css/style.login.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";


export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const login = () => {
    if (!email || !password) {
      return alert("Please fill in all the fields.");
    }

    axios
      .post("http://localhost:4000/auth", {
        email: email,
        password: password,
      })
      .then((res) => {
        localStorage.setItem('token', res.data);
        return navigate('/');
      })
      .catch((err) => {
        return alert(err.response.data);
      });
  };

  return (
    <>
      <div className="App">
        <div className="navholder">
          <nav className="navbar">
            <div className="right">
              <Link to="/" className="brand">
                Sumday
              </Link>
            </div>
            <div className="left">
              <p className="logbutton">Login</p>
              <Link to="/register">
                <p className="logbutton">Register</p>
              </Link>
            </div>
          </nav>
        </div>
        <div className="body">
          <div
            className="formholder"
            style={{
              height: "380px",
            }}
          >
            <p>Login yourself</p>
            <div
              className="form"
              style={{
                height: "170px",
              }}
            >
              <input
                type="text"
                placeholder="Email"
                className="inputclass"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
              <input
                type="password"
                placeholder="Password"
                className="inputclass"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </div>
            <div className="loginbutton" onClick={login}>Login</div>
          </div>
        </div>
      </div>
    </>
  );
};
