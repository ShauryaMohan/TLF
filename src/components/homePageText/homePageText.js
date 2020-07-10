import React from "react";
import "./text.css";
import Covid from "./Covid.jpg";
import Racism from "./Racism.jpg";

function HomePageText() {
  return (
    <div className="HomepageText-container">
      <div className="text-top-margin"></div>
      <div className="upper-left">
        <div className="covid img">
          <img src={Covid} alt="covid" />
        </div>
      </div>
      <div className="upper-right">
        <div className="heading-text">
          <p className="heading">
            In challenging times, we’re #BetterTogether to build a better
            working world.
          </p>
          <p className="text">
            Through actions both big and small, our people are helping each
            other, clients and society tackle COVID-19 challenges and build an
            even better working world.
          </p>
        </div>
      </div>
      <div className="lower-left">
        <div className="heading-text">
          <p className="heading">
            We in TLF stand against racism, believe in equality. &nbsp; &nbsp;
            #BlackLivesMatter
          </p>
          <p className="text">
            A healthy work environment always leads to efficient management and
            increased productivity. We at TLF do not tolerate racism, sexism or
            discrimination of any form and work towads better future together.
          </p>
        </div>
      </div>
      <div className="lower-right">
        <div className="racism img">
          <img src={Racism} alt="racism" />
        </div>
      </div>
      <div className="second-heading">
        <div>
          <p>Our Principles</p>
        </div>
      </div>
    </div>
  );
}

export default HomePageText;
