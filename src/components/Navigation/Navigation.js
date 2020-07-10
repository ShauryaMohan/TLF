import React from "react";
import "./Navigation.css";
import logo from "./logo.png";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Navigation extends React.Component {
  constructor() {
    super();
    this.reference = React.createRef();
  }

  openNav = () => {
    const x = this.reference.current;
    x.classList.toggle("responsive");
  };
  render() {
    return (
      <div className="Navigation">
        <div className="nav-logo">
          <img className="logo" alt="logo" src={logo} />
        </div>
        <div className="nav-link-container" ref={this.reference}>
          <p className="nav-links">About Us</p>
          <p className="nav-links">Articles</p>
          <p className="nav-links">Home</p>
        </div>
        <div className="nav-icon">
          <FontAwesomeIcon
            icon={faBars}
            size="2x"
            className="FontAwesomeIcon"
            onClick={this.openNav}
          />
        </div>
      </div>
    );
  }
}

export default Navigation;
