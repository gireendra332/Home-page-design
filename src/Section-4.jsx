import React from "react";
import "./Section-4.css";
import Vectorarc from './assets/Vectorarc.png';


const Section = () => {
  return (
    <div className="section-container">
      <div className="corner-icon"></div>
      <div className="section-content">
        <h2 className="section-title">How It Works</h2>
        <img src={Vectorarc} alt="vector arc" />
        <p className="section-text">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
          when an unknown printer took a galley of type and scrambled it to make a type specimen book.
          It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
        </p>
      </div>
    </div>
  );
};

export default Section;
