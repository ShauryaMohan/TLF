import React from "react";
import ArticleSearchBar from "../components/ArticleSearchBar/ArticleSearchBar";
import ArticleContainer from "../components/ArticleContainer/ArticleContainer";
import Article from "../Article";
// import FeaturedAuthors from "../components/FeaturedAuthors/FeaturedAuthors";

class Articles extends React.Component {
  constructor(props) {
    super(props);
    this.state = { searchInput: "" };
  }

  onInputChange = (event) => {
    this.setState({ searchInput: event.target.value });
  };
  componentWillUnmount() {
    window.scroll(0, 0);
  }

  render() {
    let SearchedArticle = Article.filter((article) => {
      return (
        article.topic
          .toLowerCase()
          .includes(this.state.searchInput.toLowerCase()) ||
        article.author
          .toLowerCase()
          .includes(this.state.searchInput.toLowerCase())
      );
    });
    return (
      <div>
        <ArticleSearchBar onInputChange={this.onInputChange} />
        <ArticleContainer
          Article={SearchedArticle}
          viewArticle={this.props.viewArticle}
        />
      </div>
    );
  }
}

export default Articles;
