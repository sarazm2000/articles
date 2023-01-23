import React from "react";
import "./navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <a href="./" className="nav-item">
        Home
      </a>
      <span></span>
      <a href="./signin" className="nav-item">
        Sign in
      </a>
      <span></span>
      <a href="./signup" className="nav-item">
        Sign up
      </a>
    </div>
  );
};

export default Navbar;
