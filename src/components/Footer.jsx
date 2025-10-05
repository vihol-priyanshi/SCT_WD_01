import React from "react";
import "./Footer.css";
import playstore from "../Images/OtherImg/playstore.webp";
import appstore from "../Images/OtherImg/appstore.webp";
import fb from "../Images/OtherImg/fb.webp";
import twitter from "../Images/OtherImg/twiter.webp";
import insta from "../Images/OtherImg/insta.webp";
import yt from "../Images/OtherImg/yt.webp";
import supercell from "../Images/OtherImg/supercell.webp";
import appIcon from "../Images/OtherImg/Icon.jpg";

const Footer = () => {
  return (
    <footer className="footer-section">
      <h2 className="follow-line">Follow us on</h2>

      <div className="footer-part-1">
        <div className="social-media">
          <ul>
            <li><img className="icons" src={yt} alt="YouTube" /></li>
            <li><img className="icons" src={fb} alt="Facebook" /></li>
            <li><img className="icons" src={insta} alt="Instagram" /></li>
            <li><img className="icons" src={twitter} alt="Twitter" /></li>
          </ul>
        </div>

        <div className="download-links">
          <ul>
            <li><img className="stores" src={appstore} alt="App Store" /></li>
            <li><img className="stores" src={playstore} alt="Play Store" /></li>
          </ul>
        </div>
      </div>

      <hr className="ruler" />

      <p className="disclaimer">
        • Disclaimer - This is a fan-made project and not affiliated with Supercell.
      </p>

      <div className="app-icons">
        <img src={appIcon} alt="App Icon" className="app-icon" />
        <img src={supercell} alt="Supercell Logo" className="app-icon" />
      </div>

      <div className="footer-part-2">
        <ul>
          <li>Terms of Service</li>
          <li>Made with React</li>
          <li>Privacy Policy</li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
