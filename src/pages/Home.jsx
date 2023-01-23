import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import { atom, useRecoilState } from "recoil";
import "./home.css";

export const slugState = atom({
  key: "slugAtom",
  default: "",
});

const Home = () => {
  const [articles, setArticles] = useState([]);

  const fetchData = () => {
    return fetch("https://api.realworld.io/api/articles/")
      .then((response) => response.json())
      .then((data) => setArticles(data.articles));
  };

  useEffect(() => {
    fetchData();
  }, []);

  const [slug, setSlug] = useRecoilState(slugState);

  const saveSlugState = (slugEvent) => {
    setSlug(slugEvent);
  };

  return (
    <div className="home">
      <Navbar />
      <h1 className="title">Articles</h1>
      {articles.map((item) => (
        <div className="article">
          <div className="favorite">
            <span className="heart">❤️️</span>
            <span>{item.favoritesCount}</span>
          </div>
          <div className="author">
            <img className="author-img" src={item.author.image} alt="avatar" />
            <div className="author-name">{item.author.username}</div>
          </div>
          <div className="date">
            <span className="create-date">created at: {item.createdAt}</span>
          </div>
          <b className="article-title" onClick={() => saveSlugState(item.slug)}>
            <a href={"article"}>{item.title}</a>
          </b>
          <div
            className="article-body"
            onClick={() => saveSlugState(item.slug)}
          >
            <a href={"article"}>{item.description}</a>
          </div>
          <span className="read-this" onClick={() => saveSlugState(item.slug)}>
            <a href={"article"}>read this</a>
          </span>
          {item.tagList.map((tag) => (
            <span className="tag">{tag}</span>
          ))}
          <br />
          <hr />
        </div>
      ))}
    </div>
  );
};

export default Home;
