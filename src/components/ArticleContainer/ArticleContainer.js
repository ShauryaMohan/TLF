import React from "react";
import "./ArticleContainer.css";
import ArticleList from "../ArticleList/ArticleList";

function ArticleContainer({ Article, viewArticle }) {
  return (
    <div className="ArticleContainer">
      <ArticleList Article={Article} viewArticle={viewArticle} />
    </div>
  );
}

export default ArticleContainer;
