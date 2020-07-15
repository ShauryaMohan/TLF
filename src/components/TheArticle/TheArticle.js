import React from "react";
import "./TheArticle.css";

class TheArticle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentWillUnmount() {
    window.scroll(0, 0);
  }
  render() {
    return (
      <div className="TheArticleConainer">
        <div className="top-margin"></div>
        <div className="TheArticleContent">
          <div className="TheArticleTopic">
            <p className="TheArticleAuthor">{this.props.article.created}</p>
            <p className="TheArticleHeading">{this.props.article.topic}</p>
            <img
              alt="ArticleImage"
              src={this.props.article.image}
              width="80%"
            />
            <p className="TheArticleAuthor">
              {"By " + this.props.article.author}
            </p>
            <hr />
          </div>
          <div className="TheArticleText">
            <p>{this.props.article.content}</p>
          </div>
        </div>
      </div>
    );
  }
}
export default TheArticle;
