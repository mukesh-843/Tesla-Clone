import React from "react";
import "./App.css";

import Home from "./components/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Model3 from "./components/Model3";
import ModelS from "./components/ModelS";
import ModelX from "./components/ModelX";
import ModelY from "./components/ModelY";
import Dashboard from "./components/Dashboard";
import ProtectedRoute from "./components/ProtectedRoute";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { UserAuthContextProvider } from "./context/UserAuthContext";
function App() {
 
  return (
    <Router>
      <div className="App">
        <UserAuthContextProvider>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
          <Route path="/" element={<Home />} />
          <Route path="/models" element={<ModelS />} />
          <Route path="/model3" element={<Model3 />} />
          <Route path="/modelx" element={<ModelX />}/>
          <Route path="/modely" element={<ModelY />}/>

        </Routes>
        </UserAuthContextProvider>
      </div>
    </Router>
  );
}

export default App;
