import React, { useState } from "react";
import villager from "../Images/OtherImg/thinking_villager.png";
import screenImg from "../Images/OtherImg/heroImgsection.webp";
import villager2 from "../Images/OtherImg/villager2.png";
import "./Home.css";
import { NavLink } from "react-router-dom";
const Hero = ({ playerName, setPlayerName }) => {

  // State for storing the player's name, default is "Chief"
  // const [user, setUser]= useState({name:" "});

 // State for villager's message display; initially prompts for name
  const [villagerMessage, setVillagerMessage] = useState(
    <>
      Before you lead, <br />
      tell us your name!
    </>
  );

   // State to track whether the name has been submitted
  const [isNameSubmitted, setIsNameSubmitted] = useState(false);


  // Handler for "Let's Go" button click
  // Updates the villager message and sets name as submitted
  function handleLetsGoBtn() {
    setVillagerMessage(
      <>
        <span style={{ color: "#a3cff5ff" }}>
          ⚔️Welcome, Chief <br /><span style={{color:"#fff"}}>{playerName}</span> !🛡️
        </span>
      </>
    );
    setIsNameSubmitted(true);
  }

   // Handler for input change , updates user state with current value
  function handleNameField(e) {
    setPlayerName(e.target.value);
  }
  return (
    <>
      <div className="hero">
        <div className="container">
          <div className="column-layout">
            <div className="col-1 column">
              <img src={screenImg} alt="gameScreen" className="screenImg" />
            </div>
            <div className="col-2 column">
              <div className="subcol-1">
                <div className="hero-txt">
                  <h3>Build Your Village.</h3>
                  <h3>Raise Your Army.</h3>
                  <h3> Dominate the Clash!</h3>
                </div>
                <div className="btn">
                  <button className="btn-features"><NavLink to="features">Explore Features</NavLink></button>
                </div>
              </div>
            </div>
          </div>

           {/* Villager interaction section */}
          <div className="Data">
            <div className="info">
               {/* Display villager's message */}
              <label htmlFor="name">{villagerMessage}</label>
              {/* Input field; visible only before submission */}
              {!isNameSubmitted ? (
                <input
                  type="text"
                  placeholder="Enter Name"
                  onChange={handleNameField}
                />
              ) : null}

              {/* "Let's Go" button; visible only before submission */}
              {!isNameSubmitted ? (
                <button className="btn-submit btn" onClick={handleLetsGoBtn}
                style={{ display: isNameSubmitted ? "none" : "block" }}>
                  Let's go!
                </button>
              ) : null}
            </div>

            {/* Villager image changes based on name submission */}
            <div className="village-lady">
                 {!isNameSubmitted ? (<img className="ladyImg" src={villager} alt="villager" />) :(<img className="ladyImg" src={villager2} alt="villager" />)}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
