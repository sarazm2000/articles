import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import Navbar from "../components/Navbar";
import "./sign.css";
import axios from "axios";
import { Navigate } from "react-router-dom";

const SignIn = () => {
  const [data, setData] = useState();
  const handleChange = (e) => {
    setData({
      ...data,

      // Trimming any whitespace
      [e.target.name]: e.target.value.trim(),
    });
  };

  const handleSubmit = (e) => {
    console.log(data.Email);
    e.preventDefault();
    axios
      .post(`https://api.realworld.io/api/users/login`, {
        user: {
          email: data.Email,
          password: data.password,
        },
      })
      .then(function (res) {
        console.log(res.data.user.token);
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
          <button onClick={() => handleSubmit()}>sign in</button>
        </form>
      </div>
    </div>
  );
};
export default SignIn;
