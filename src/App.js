import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { HomeScreen } from "./screens/home.screen";
import { Register } from "./screens/register.screen";
import { Login } from "./screens/login.screen";
import { Dashboard } from "./screens/dashboard.scree";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route 
            path="/"
            element={<HomeScreen />}
          />
          <Route 
            path="/register"
            element={<Register />}
          />
          <Route 
            path="/login"
            element={<Login />}
          />
          <Route 
            path="/dashboard"
            element={<Dashboard />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
