import React from "react";
import "./cards.css";

function Cards({ article, viewArticle }) {
  const style = {
    height: "100%",
    width: "100%",
    position: "absolute",
    backgroundImage: `url(${article.image})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    transition: "0.5s",
  };
  return (
    <div
      className="Card-Wrapper"
      onClick={() => {
        viewArticle(article);
      }}
    >
      <div className="Card-image" style={style}>
        <div className="Card-text">
          <p className="Card-text-topic">{article.topic}</p>
        </div>
      </div>
    </div>
  );
}

export default Cards;
