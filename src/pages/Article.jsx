import React, { useEffect, useState } from "react";
import { useRecoilValue, useRecoilState } from "recoil";
import { slugState } from "./Home";

const Article = () => {
  const [article, setArticle] = useState();
  const slug = useRecoilValue(slugState);

  const fetchData = () => {
    return fetch(
      `https://api.realworld.io/api/articles/If-we-quantify-the-alarm-we-can-get-to-the-FTP-pixel-through-the-online-SSL-interface!-120863`
    )
      .then((response) => response.json())
      .then((data) => setArticle(data.article));
  };

  useEffect(() => {
    fetchData();
  }, []);
  console.log(article);
  return (
    <div className="article-page">
      <div className="favorite">
        <span className="heart">❤️️</span>
        <span>{article.favoritesCount}</span>
      </div>
      <div className="author">
        <img className="author-img" src={article.author.image} alt="avatar" />
        <div className="author-name">{article.author.username}</div>
      </div>
      <div className="date">
        <span className="create-date">created at: {article.createdAt}</span>
      </div>
      <div className="article-title">{article.title}</div>
      <div className="body">{article.body.replaceAll("\\n", "\n")}</div>
      {article.tagList.map((tag) => (
        <span className="tag">{tag}</span>
      ))}
    </div>
  );
};

export default Article;
