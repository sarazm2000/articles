import React from "react";
import "./navbar.css";

const Navbar = () => {
  const token = localStorage.getItem("token");
  // console.log(token);
  return (
    <>
      {token ? (
        <div className="navbar">
          <a href="./" className="nav-item">
            Home
          </a>
          <a className="button" href="./create-article">
            New Article
          </a>
        </div>
      ) : (
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
      )}
    </>
  );
};

export default Navbar;
