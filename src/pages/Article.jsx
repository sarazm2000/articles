import React, { useEffect, useState } from "react";
import { useRecoilValue, useRecoilState } from "recoil";
import Navbar from "../components/Navbar";
import { slugState } from "./Home";
import "./article.css";

const Article = () => {
  const [article, setArticle] = useState();
  const [comments, setComments] = useState();
  const slug = useRecoilValue(slugState);

  let tempSlug =
    "If-we-quantify-the-alarm-we-can-get-to-the-FTP-pixel-through-the-online-SSL-interface!-120863";
  const fetchData = () => {
    return fetch(`https://api.realworld.io/api/articles/${tempSlug}`)
      .then((response) => response.json())
      .then((data) => setArticle(data.article));
  };

  useEffect(() => {
    fetchData();
  }, []);

  const fetchComments = () => {
    return fetch(`https://api.realworld.io/api/articles/${tempSlug}/comments`)
      .then((response) => response.json())
      .then((data) => setComments(data.comments));
  };

  useEffect(() => {
    fetchComments();
  }, []);

  console.log(comments);
  return (
    <div className="article-page">
      <Navbar />
      <div className="article-title">
        <div className="favorite">
          <span className="heart">❤️️</span>
          <span>{article.favoritesCount}</span>
        </div>
        {article.title}
        <div className="author">
          <img className="author-img" src={article.author.image} alt="avatar" />
          <div className="author-name">{article.author.username}</div>
        </div>
        <div className="date">
          <span className="create-date">created at: {article.createdAt}</span>
        </div>
      </div>

      <div className="body">{article.body.replaceAll("\\n", "\n")}</div>
      <div className="tag-container">
        {article.tagList.map((tag) => (
          <span className="tag">{tag}</span>
        ))}
      </div>
      <div className="comments-container">
        <hr />
        <div className="comment-title">Comments</div>
        {comments.length ? (
          comments.map((comment) => <div className="comment">{comment}</div>)
        ) : (
          <div className="comment">There is no comment yet!</div>
        )}
        <br />
        <div className="add-comment">
          <textarea name="comment" id="comment" cols="70" rows="4"></textarea>
          <div className="comment-button">Add</div>
        </div>
      </div>
    </div>
  );
};

export default Article;
