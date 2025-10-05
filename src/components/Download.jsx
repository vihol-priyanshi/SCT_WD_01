import React from "react";
import './Download.css'
import downloadScreen from "../Images/OtherImg/desktopView.jpg";
import phoneview from "../Images/OtherImg/phoneview.webp";
import pc from "../Images/OtherImg/pc.jpg";

const Download = () => {
  return (
    <>
      <div className="download-container">
        {/* Desktop Image */}
        <img
          src={downloadScreen}
          alt="Download Desktop"
          className="download-hero-image download-hero-desktop"
        />

        {/* Mobile Image */}
        <img
          src={phoneview}
          alt="Download Mobile"
          className="download-hero-image download-hero-mobile"
        />

        <div className="download-hero-text">
          <p>Build. Battle. Conquer. Download Clash of Clans Now!</p>
          <button className="download"><a href="https://play.google.com/store/apps/details?id=com.supercell.clashofclans">Download</a></button>
        </div>
      </div>
      <div className="section2">
        <div className="section-text">
          <h2>How to install Clash of Clans on your PC?</h2>
          <div className="pc-image">
            <img src={pc} alt="coc-on-pc" className="pc" />
            <div className="pc-steps">
            <p>
            ~ We provide you both the Clash of Clans APK file and the BlueStacks emulator
            that will allow you to run the application on your PC.
            You just need to unzip the file and follow the installation instructions bundled
            in a dedicated file.
          </p>
          </div>
          </div>
          <button className="download"><a href="https://play.google.com/pc-store/games/details?id=com.supercell.clashofclans&utm_source=chatgpt.com">Download on PC</a></button>
        </div>
      </div>
    </>
  );
};

export default Download;


