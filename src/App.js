import React from "react";
import { RecoilRoot } from "recoil";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Home from "./pages/Home";
import "./app.css";
import Article from "./pages/Article";
import { slugState } from "./pages/Home";
import { useRecoilValue } from "recoil";

function App() {
  // const slug = useRecoilValue(slugState);
  return (
    <RecoilRoot>
      <div className="app">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="signin" element={<SignIn />} />
            <Route path="signup" element={<SignUp />} />
            <Route path={"article"} element={<Article />} />
          </Routes>
        </BrowserRouter>
      </div>
    </RecoilRoot>
  );
}

export default App;
