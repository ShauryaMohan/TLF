import React from "react";

class AboutUs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentWillUnmount() {
    window.scroll(0, 0);
  }

  render() {
    return (
      <div
        style={{
          height: "600px",
          position: "relative",
          width: "100%",
        }}
      >
        <h1 style={{ marginTop: "200px", textAlign: "center" }}>
          The Page is under development
        </h1>
      </div>
    );
  }
}

export default AboutUs;
