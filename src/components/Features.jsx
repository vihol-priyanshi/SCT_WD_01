import React from 'react';
import features from '../Data/FeaturesData.js';
import './Features.css';

const Features = () => {
  return (
    <>
      <div className="features">
        <div className="features-container">
          <div className="featurePage-title">
            <h1>Game Features That Make You Unstoppable</h1>
            <h3>
              Clash isn’t just a game — it’s a world of teamwork, strategy, and epic battles.
              Here’s what you can do as a Chief.
            </h3>
          </div>

          <div className="features-column-layout">
            {features.map((feat, index) => (
              <div className="feature-card" key={index}>
                <img
                  src={`/featuresPic/${feat.image}`}
                  alt={feat.name}
                  className="feature-img"
                />
                <p className="feature-description">~ {feat.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Features;

