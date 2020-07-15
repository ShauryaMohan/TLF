import React from "react";
import "./Navigation.css";
import logo from "./logo.png";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Navigation extends React.Component {
  constructor(props) {
    super(props);
    this.reference = React.createRef();
  }

  openNav = () => {
    const x = document.getElementById("navlinkcontainer");
    if (x.className.includes("responsive")) {
      x.className = "nav-link-container";
    } else {
      x.className = "nav-link-container responsive";
    }
  };
  render() {
    return (
      <div className="Navigation">
        <div className="nav-logo">
          <img className="logo" alt="logo" src={logo} />
        </div>
        <div
          className="nav-link-container"
          ref={this.reference}
          id="navlinkcontainer"
        >
          <p
            className="nav-links"
            onClick={() => {
              this.props.changeRoute("home");
              this.openNav();
            }}
          >
            Home
          </p>
          <p
            className="nav-links"
            onClick={() => {
              this.props.changeRoute("articles");
              this.openNav();
            }}
          >
            Articles
          </p>
          <p
            className="nav-links"
            onClick={() => {
              this.props.changeRoute("aboutus");
              this.openNav();
            }}
          >
            About Us
          </p>
        </div>
        <div className="nav-icon">
          <button onClick={this.openNav} className="toggle-button">
            <FontAwesomeIcon
              icon={faBars}
              size="2x"
              className="FontAwesomeIcon"
            />
          </button>
        </div>
      </div>
    );
  }
}

export default Navigation;
