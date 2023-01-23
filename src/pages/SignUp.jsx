import React from "react";
import Navbar from "../components/Navbar";
import "./sign.css";

const SignUp = () => {
  return (
    <div className="sign-up-page">
      <Navbar />
      <div className="sign">
        <h1 className="sign-up-title">Sign Up</h1>
        <a href="./signin" className="sign-up-link">
          Have an Account?
        </a>
        <form action="" className="form">
          <input
            type="username"
            name="username"
            id="username"
            placeholder="Username"
          />
          <br />
          <input type="Email" name="Email" id="Email" placeholder="Email" />
          <br />
          <input
            type="password"
            name="password"
            id="password"
            placeholder="password"
          />
          <br />
          <button>sign up</button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
