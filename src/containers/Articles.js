import React from "react";
import Cards from "../components/Cards/Cards";
import Carousel from "../components/Carousel/Carousel";

class Articles extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <homePageTop />
        <Cards />
        <homePageText />
        <Carousel />
      </div>
    );
  }
}

export default Articles;
