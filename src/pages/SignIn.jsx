import React, { useState } from "react";
import Button from "../components/Button";
import Navbar from "../components/Navbar";
import "./sign.css";

const SignIn = () => {
  const [data, setData] = useState();
  const handleChange = (e) => {
    setData({
      ...data,

      // Trimming any whitespace
      [e.target.name]: e.target.value.trim(),
    });
  };

  const handleSubmit = () => {
    console.log(data);
    // ... submit to API or something
  };

  return (
    <div className="sign-in-page">
      <Navbar />
      <div className="sign">
        <h1 className="sign-in-title">Sign in</h1>
        <a href="./signup" className="sign-up-link">
          Need an Account?
        </a>
        <form action="" className="form">
          <input
            type="Email"
            name="Email"
            id="Email"
            placeholder="Email"
            onChange={() => handleChange()}
          />
          <br />
          <input
            type="password"
            name="password"
            id="password"
            placeholder="password"
            onChange={handleChange}
          />
          <br />
          <button onClick={() => handleSubmit()}>sign in</button>
        </form>
      </div>
    </div>
  );
};
export default SignIn;
