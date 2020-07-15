import React from "react";
import "./ArticleCard.css";

function ArticleCard({ article, viewArticle }) {
  return (
    <div className="ArticleCard-container" onClick={() => viewArticle(article)}>
      <div className="ArticleCard-image">
        <img
          height="100%"
          width="100%"
          src={article.image}
          alt={article.id.toString()}
        />
      </div>
      <div className="ArticleCard-text">
        <p className="Topic">{article.topic}</p>
        <p className="Author">{article.author}</p>
      </div>
    </div>
  );
}

export default ArticleCard;
