import "./App.css";
import Navbar from "./components/Navbar";
import {Home} from "./pages/Home"
import LogIn1 from "./pages/LogIn1";
import {Signup} from "./pages/Signup"
import {Dashborad} from "./pages/Dashborad"
import { Route, Routes } from "react-router-dom";
import { useState } from "react";
import PrivateRoute from "./components/PrivateRoute";


function App() {
  const[isLoggedIn, setIsLoggedIn] =useState(false);

  return (
    <div className="w-screen bg-richblack-900 flex flex-col">
      <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}></Navbar>

      <Routes>
        <Route path="/" element={<Home isLoggedIn={isLoggedIn}></Home>}></Route>
        <Route path="/login" element={<LogIn1 setIsLoggedIn={setIsLoggedIn}></LogIn1>}></Route>
        <Route path="/signup" element={<Signup setIsLoggedIn={setIsLoggedIn}></Signup>}></Route>
        <Route path="/dashboard" element={
          <PrivateRoute isLoggedIn={isLoggedIn}>
            <Dashborad/>
          </PrivateRoute>
        }></Route>
      </Routes>
    </div>
  );
}

export default App;
