import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import "./sign.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [data, setData] = useState();
  const handleChange = (e) => {
    setData({
      ...data,

      // Trimming any whitespace
      [e.target.name]: e.target.value.trim(),
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(`https://api.realworld.io/api/users`, {
        user: {
          username: data.username,
          email: data.Email,
          password: data.password,
        },
      })
      .then(function (res) {
        const token = res.data.user.token;
        localStorage.setItem("token", token);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem("token")) navigate("/");
  }, []);

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
            onChange={handleChange}
          />
          <br />
          <input
            type="Email"
            name="Email"
            id="Email"
            placeholder="Email"
            onChange={handleChange}
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
          <button onClick={handleSubmit}>sign up</button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
