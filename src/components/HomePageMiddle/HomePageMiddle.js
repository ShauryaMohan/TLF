import React from "react";
import "./HomePageMiddle.css";
import Cards from "../Cards/Cards";
import Articles from "../../Article";

function HomePageMiddle(props) {
  return (
    <div className="middle-background">
      <div className="middle-heading">
        <p>Popular Articles</p>
      </div>
      <div className="Cardcontainer">
        <Cards article={Articles[0]} viewArticle={props.viewArticle} />
        <Cards article={Articles[1]} viewArticle={props.viewArticle} />
        <Cards article={Articles[2]} viewArticle={props.viewArticle} />
      </div>
    </div>
  );
}

export default HomePageMiddle;
