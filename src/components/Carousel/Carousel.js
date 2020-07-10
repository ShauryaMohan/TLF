import React from "react";
import "./carousel.css";
import One from "./one.jpg";
import Two from "./two.jpg";
import Three from "./three.jpg";
import Four from "./four.jpg";

class Carousel extends React.Component {
  constructor() {
    super();
    this.state = { active: 1 };
  }

  changebackground = (i) => {
    this.setState({ active: i });
  };
  render() {
    const imageList = [One, Two, Three, Four];
    let style = {
      display: "grid",
      gridColumnGap: "2px",
      gridTemplateColumns: "auto auto auto auto",
      position: "relative",
      height: "100vh",
      width: "100%",
      backgroundImage: `url(${imageList[this.state.active]})`,
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      transition: "0.5s",
    };
    return (
      <div className="Carousel-container" style={style}>
        <div className="slide one" onMouseOver={() => this.changebackground(0)}>
          <p className="Slide-text">Satisfaction</p>
        </div>
        <div className="slide two" onMouseOver={() => this.changebackground(1)}>
          <p className="Slide-text">Planning</p>
        </div>
        <div
          className="slide three"
          onMouseOver={() => this.changebackground(2)}
        >
          <p className="Slide-text">Trust</p>
        </div>
        <div
          className="slide four"
          onMouseOver={() => this.changebackground(3)}
        >
          <p className="Slide-text">Profesional</p>
        </div>
      </div>
    );
  }
}

export default Carousel;
