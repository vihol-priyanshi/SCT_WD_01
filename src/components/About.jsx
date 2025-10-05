import React from 'react'
import './About.css'
import { NavLink } from "react-router-dom";
import aboutDesktop from '../Images/OtherImg/aboutSectionPic2.webp'
import aboutPhone from '../Images/OtherImg/aboutSectionPic1.webp'

const About = () => {
  return (
    <>
       <div className="about-container">
            {/* Desktop Image */}
            <img
              src={aboutDesktop}
              alt="About Desktop"
              className="about-section-image about-desktop"
            />

            {/* Mobile Image */}
            <img
              src={aboutPhone}
              alt="About Mobile"
              className="about-section-image about-mobile"
            />
            <div className="hero2-text">
              <p>THE BEST TEAMS MAKES THE BEST GAME*</p>
            </div>
          </div>
             <div className="section2">
                  <div className="section-text">
                    <h2>SUPERCELL</h2>
                    <div className="pc-image">
                      <div className="pc-steps about-seupercell">
                      <p style={{border:"none" , background:'none'}}>
                      ~ Supercell is a game company based in Helsinki, Finland, with offices in San Francisco, Seoul, Shanghai, and London. Since our launch in 2010, we've brought seven games to the global market – Hay Day, Clash of Clans, Boom Beach, Clash Royale, Brawl Stars, Squad Busters, and mo.co. Our dream is to create great games that as many people as possible play for years and that are remembered forever.
                    </p>
                    </div>
                    </div>
                     <button className="download"><a href='https://supercell.com/en/games/'>More Games</a></button>
                  </div>
                </div>
          </>
  )
}

export default About