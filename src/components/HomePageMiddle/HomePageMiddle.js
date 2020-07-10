import React from "react";
import "./HomePageMiddle.css";
import Cards from "../Cards/Cards";
import Articles from "../../Articles";

function HomePageMiddle() {
  return (
    <div className="middle-background">
      <div className="middle-heading">
        <p>Popular Articles</p>
      </div>
      <div className="Cardcontainer">
        <Cards article={Articles[0]} />
        <Cards article={Articles[1]} />
        <Cards article={Articles[2]} />
      </div>
    </div>
  );
}

export default HomePageMiddle;
