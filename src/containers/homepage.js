import React from "react";
import HomePageMiddle from "../components/HomePageMiddle/HomePageMiddle";
import Carousel from "../components/Carousel/Carousel";
import HomePageTop from "../components/homePageTop/homePageTop";
import HomePageText from "../components/homePageText/homePageText";

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentWillUnmount() {
    window.scroll(0, 0);
  }

  render() {
    return (
      <div>
        <HomePageTop />
        <HomePageMiddle viewArticle={this.props.viewArticle} />
        <HomePageText />
        <Carousel />
      </div>
    );
  }
}

export default HomePage;
