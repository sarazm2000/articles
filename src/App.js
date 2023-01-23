import React from "react";
import { RecoilRoot } from "recoil";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Home from "./pages/Home";
import "./app.css";
import Article from "./pages/Article";
import { useRecoilValue } from "recoil";
import NewArticle from "./pages/NewArticle";

function App() {
  const token = localStorage.getItem("token");
  return (
    <RecoilRoot>
      <div className="app">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="signin" element={<SignIn />} />
            <Route path="signup" element={<SignUp />} />
            <Route path={"article"} element={<Article />} />
            <Route path="create-article" element={<NewArticle />} />
          </Routes>
        </BrowserRouter>
      </div>
    </RecoilRoot>
  );
}

export default App;
