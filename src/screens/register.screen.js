import React, { useState } from "react";
import './../css/style.login.css';
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

export const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const submitForm = () => {
    if (!name || !email || !password) {
      return alert('Please fill in all the fields');
    }
    axios
      .post("http://localhost:4000/user/", {
        email: email,
        name: name,
        password: password
      })
      .then((res) => {
        alert('User created');
        navigate('/login');
      })
      .catch(e => {
        return alert(e.response.data);
      });
  }

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
            <input type="text" placeholder="Name" className="inputclass" onChange={(e) => {
              setName(e.target.value);
            }}/>
            <input type="text" placeholder="Email" className="inputclass" onChange={(e) => {
              setEmail(e.target.value);
            }}/>
            <input type="password" placeholder="Password" className="inputclass" onChange={(e) => {
              setPassword(e.target.value);
            }}/>
          </div>
          <div className="loginbutton" onClick={submitForm}>Register</div>
        </div>
      </div>
    </div>
  );
}
