import React from "react";
import "../pages/newArticle.css";

const NewArticle = () => {
  return (
    <div className="new-article">
      <div className="form">
        <input
          className="title new-title new"
          type="text"
          placeholder="Title"
        />
        <input
          className="title new-discription new"
          type="text"
          placeholder="discription"
        />
        <input className="title new-body new" type="text" placeholder="body" />
      </div>
    </div>
  );
};

export default NewArticle;
