import { Route, Routes } from "react-router-dom";
import "./App.css";
import NavBar from "./Components/NavBar"
import Home from "./pages/Home"
import Dashboard from "./pages/Dashboard"
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import { useState } from "react";

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
  <div >
    <NavBar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>

    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/signUp" element={<Signup/>} />
      <Route path="/dashboard" element={<Dashboard/>} />
    </Routes>
  </div>
  );
}

export default App;
