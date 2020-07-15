import React from "react";
import "./carousel.css";

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = { active: 1 };
    this.carousel = 0;
  }

  changebackground = () => {
    let slideIndex = this.state.active;
    let i = 0;
    const slides = document.getElementsByClassName("slide");
    const panels = document.getElementsByClassName("panel");
    for (i = 0; i < slides.length; i++) {
      slides[i].className = slides[i].className.replace(" active", "");
    }
    for (i = 0; i < slides.length; i++) {
      panels[i].className = panels[i].className.replace(" activePanel", "");
    }
    slideIndex++;
    if (slideIndex > slides.length) {
      slideIndex = 1;
    }
    this.setState({ active: slideIndex });
    slides[slideIndex - 1].classList.add("active");
    panels[slideIndex - 1].classList.add("activePanel");
  };

  componentDidMount() {
    this.carousel = setInterval(this.changebackground, 5000);
  }
  componentWillUnmount() {
    clearInterval(this.carousel);
  }

  render() {
    return (
      <div className="Carousel-container">
        <div className="panel-container">
          <div className="panel one activePanel">
            <p className="panel-text">Satisfaction</p>
          </div>
          <div className="panel two">
            <p className="panel-text">Planning</p>
          </div>
          <div className="panel three">
            <p className="panel-text">Trust</p>
          </div>
          <div className="panel four">
            <p className="panel-text">Profesional</p>
          </div>
        </div>
        <div className="slide I active"></div>
        <div className="slide II"></div>
        <div className="slide III"></div>
        <div className="slide IV"></div>
      </div>
    );
  }
}

export default Carousel;
