import React from "react";
import "./statSection.css";
import statImage1 from "./assets/statsImage1.png";
import statImage2 from "./assets/statsImage2.png";
import statImage3 from "./assets/statsImage3.png";
import background from "./assets/background.png";

const StatsSection = () => {
  return (
    <div className="stats-container">
      <img src={background} alt="Background" className="background-image" />
      <div className="stats-content">
        <div className="stat-item">
          <img src={statImage1} alt="Registered Users Icon" className="stat-icon" />
          <div className="stat-text">
            <p className="stat-title">Registered User</p>
            <p className="stat-value">1000+</p>
          </div>
        </div>
        <div className="stat-item">
          <img src={statImage2} alt="Towns and Cities Icon" className="stat-icon" />
          <div className="stat-text">
            <p className="stat-title">Towns And Cities</p>
            <p className="stat-value">600+</p>
          </div>
        </div>
        <div className="stat-item">
          <img src={statImage3} alt="Question Papers Icon" className="stat-icon" />
          <div className="stat-text">
            <p className="stat-title">Question and test papers</p>
            <p className="stat-value">30,000+</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatsSection;
