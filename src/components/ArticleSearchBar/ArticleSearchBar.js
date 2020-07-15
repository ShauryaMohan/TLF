import React from "react";
import "./ArticleSearchBar.css";

function ArticleSearchBar({ onInputChange }) {
  return (
    <div className="SearchBarContainer">
      <div className="SearchBarMargin"></div>
      <div className="SearchBar">
        <input
          type="text"
          name="serach"
          className="SearchBox"
          placeholder="Search articles..."
          onChange={onInputChange}
        />
      </div>
    </div>
  );
}

export default ArticleSearchBar;
