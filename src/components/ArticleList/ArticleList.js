import React from "react";
import ArticleCard from "../ArticleCard/ArticleCard.js";

function ArticleList({ Article, viewArticle }) {
  const ArticleCardList = Article.map((article) => {
    return (
      <ArticleCard
        key={article.id}
        article={article}
        viewArticle={viewArticle}
      />
    );
  });
  return (
    <div
      style={{
        height: "100%",
        width: "100%",
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
      }}
    >
      {ArticleCardList}
    </div>
  );
}

export default ArticleList;
