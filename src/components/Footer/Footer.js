import React from "react";
import "./footer.css";
import { SocialMediaIconsReact } from "social-media-icons-react";

function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-margin"></div>
      <div className="footer">
        <div className="footer-upper">
          <p>Follow us </p>
          <div className="icons">
            <SocialMediaIconsReact
              icon="twitter"
              backgroundColor="white"
              iconColor="black"
              roundness={50}
              borderColor="black"
              borderStyle="solid"
              borderWidth={1}
              size={45}
            />
          </div>
          <div className="icons">
            <SocialMediaIconsReact
              icon="facebook"
              backgroundColor="white"
              iconColor="black"
              roundness={50}
              borderColor="black"
              borderStyle="solid"
              borderWidth={1}
              size={45}
              className="icons"
            />
          </div>
          <div className="icons">
            <SocialMediaIconsReact
              icon="linkedin"
              backgroundColor="white"
              iconColor="black"
              roundness={50}
              borderColor="black"
              borderStyle="solid"
              borderWidth={1}
              size={45}
            />
          </div>
          <div className="icons">
            <SocialMediaIconsReact
              icon="instagram"
              backgroundColor="white"
              iconColor="black"
              roundness={50}
              borderColor="black"
              borderStyle="solid"
              borderWidth={1}
              size={45}
            />
          </div>
        </div>
        <div className="footer-lower">
          <p className="copyright">
            © 2020 Shaurya Mohan{" "}
            <span style={{ fontSize: 16 }}>
              &nbsp; &nbsp;| &nbsp; Contact &nbsp; &nbsp; Follow &nbsp;
              &nbsp;About
            </span>
          </p>
          <p className="lastText">
            TLF is an Equal Opportunity Employer. All qualified applicants will
            receive consideration for employment without regard to race, color,
            age, religion, sex, sexual orientation, gender identity /
            expression, national origin, protected veteran status, or any other
            characteristic protected under federal, state or local law, where
            applicable, and those with criminal histories will be considered in
            a manner consistent with applicable state and local laws.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
