import React, { useState } from "react";
import { useRecoilValue, useRecoilState } from "recoil";
import Navbar from "../components/Navbar";
import { slugState } from "./Home";
import "./article.css";
import axios from "axios";

const Article = () => {
  const [article, setArticle] = useState(null);
  const [comments, setComments] = useState(null);
  const [value, setValue] = useState("");
  const slug = useRecoilValue(slugState);

  let tempSlug =
    "If-we-quantify-the-alarm-we-can-get-to-the-FTP-pixel-through-the-online-SSL-interface!-120863";

  React.useEffect(() => {
    axios
      .get(`https://api.realworld.io/api/articles/${tempSlug}`)
      .then((response) => {
        setArticle(response.data.article);
      });
  }, []);

  React.useEffect(() => {
    axios
      .get(`https://api.realworld.io/api/articles/${tempSlug}/comments`)
      .then((response) => {
        setComments(response.data);
      });
  }, []);

  function createComment() {
    console.log(value);
    axios
      .post(`https://api.realworld.io/api/articles/${tempSlug}/comments`, {
        comment: {
          body: value,
        },
      })
      .then(function (res) {
        console.log(res);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  return (
    <div className="article-page">
      <Navbar />
      {article && comments ? (
        <>
          <div className="article-article-title">
            <div className="favorite">
              <span className="heart">❤️️</span>
              <span>{article.favoritesCount}</span>
            </div>
            {article.title}
            <div className="article-author">
              <img
                className="article-author-img"
                src={article.author.image}
                alt="avatar"
              />
              <div className="article-author-name">
                {article.author.username}
              </div>
            </div>
            <div className="article-date">
              <span className="article-create-date">
                created at: {article.createdAt}
              </span>
            </div>
          </div>

          <div className="article-content">
            {article.body.replaceAll("\\n", "\n")}
          </div>
          <div className="article-tag-container">
            {article.tagList.map((tag) => (
              <span className="tag">{tag}</span>
            ))}
          </div>
          <div className="comments-container">
            <div className="comment-title">Comments</div>
            {comments.length ? (
              comments.map((comment) => (
                <div className="comment">{comment}</div>
              ))
            ) : (
              <div className="comment">There is no comment yet!</div>
            )}
            <br />
            <div className="add-comment">
              <textarea
                onChange={(e) => setValue(e.target.value)}
                name="comment"
                id="comment"
                cols="40"
                rows="4"
              ></textarea>
              <div onClick={createComment} className="comment-button">
                Add
              </div>
            </div>
          </div>
        </>
      ) : (
        <>loading</>
      )}
    </div>
  );
};

export default Article;
