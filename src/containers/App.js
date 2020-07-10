import React from "react";
import "./App.css";
import HomePage from "./homepage";
import Articles from "./Articles";
import AboutUs from "./AboutUs";
import Navigation from "../components/Navigation/Navigation";
import Footer from "../components/Footer/Footer";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      route: "home",
    };
  }
  render() {
    return (
      <div>
        <Navigation />
        {this.state.route === "home" ? (
          <HomePage />
        ) : this.state.route === "articles" ? (
          <Articles />
        ) : (
          <AboutUs />
        )}
        <Footer />
      </div>
    );
  }
}

export default App;
