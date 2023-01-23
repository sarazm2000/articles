import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import { atom, useRecoilState } from "recoil";
import "./home.css";
import axios from "axios";
// import Tags from "../components/Tags";

export const slugState = atom({
  key: "slugAtom",
  default: "",
});

const Home = () => {
  const [articles, setArticles] = useState([]);
  const [tags, setTags] = useState([]);
  const [slug, setSlug] = useRecoilState(slugState);

  React.useEffect(() => {
    axios.get(`https://api.realworld.io/api/tags`).then((response) => {
      setTags(response.data.tags);
    });
  }, []);
  console.log(tags);
  React.useEffect(() => {
    axios.get("https://api.realworld.io/api/articles/").then((response) => {
      setArticles(response.data.articles);
    });
  }, []);

  const saveSlugState = (slugEvent) => {
    setSlug(slugEvent);
  };

  return (
    <div className="home">
      <Navbar />
      <h1 className="title">Articles</h1>
      {tags && articles ? (
        <>
          <div className="tag-container">
            {tags.map((tag) => (
              <div className="tag-name">{tag}</div>
            ))}
          </div>
          {articles.map((item) => (
            <div className="article">
              <div className="favorite">
                <span className="heart">❤️️</span>
                <span>{item.favoritesCount}</span>
              </div>
              <div className="author">
                <img
                  className="author-img"
                  src={item.author.image}
                  alt="avatar"
                />
                <div className="author-name">{item.author.username}</div>
              </div>
              <div className="date">
                <span className="create-date">
                  created at: {item.createdAt}
                </span>
              </div>
              <b
                className="article-title"
                onClick={() => saveSlugState(item.slug)}
              >
                <a className="article-title" href={"article"}>
                  {item.title}
                </a>
              </b>
              <div className="body" onClick={() => saveSlugState(item.slug)}>
                <a href={"article"}>{item.description}</a>
              </div>
              <span
                className="read-this"
                onClick={() => saveSlugState(item.slug)}
              >
                <a href={"article"}>read this</a>
              </span>
              {item.tagList.map((tag) => (
                <span className="tag">{tag}</span>
              ))}
              <br />
              <hr />
            </div>
          ))}
        </>
      ) : (
        <>loading</>
      )}
    </div>
  );
};

export default Home;
