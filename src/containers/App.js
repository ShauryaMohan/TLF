import React from "react";
import "./App.css";
import HomePage from "./homepage";
import Articles from "./Articles";
import AboutUs from "./AboutUs";
import Navigation from "../components/Navigation/Navigation";
import Footer from "../components/Footer/Footer";
import TheArticle from "../components/TheArticle/TheArticle";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      route: "home",
      article: {
        id: 0,
        topic: "",
        content: "",
        author: "",
        created: "",
        image: "",
      },
    };
  }
  viewArticle = (article) => {
    this.setState({ route: "article", article: article });
  };
  changeRoute = (route) => {
    this.setState({ route: route });
  };
  render() {
    const Routing = () => {
      switch (this.state.route) {
        case "home":
          return <HomePage viewArticle={this.viewArticle} />;
        case "articles":
          return <Articles viewArticle={this.viewArticle} />;
        case "aboutus":
          return <AboutUs />;
        case "article":
          return <TheArticle article={this.state.article} />;
        default:
          return <HomePage />;
      }
    };
    return (
      <div>
        <Navigation changeRoute={this.changeRoute} />
        {Routing()}
        <Footer />
      </div>
    );
  }
}

export default App;
