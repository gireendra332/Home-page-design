import React from "react";
import "./Section-3.css";
import Starimage from "./assets/Star 1.png";
import PencilImage from "./assets/Pencil-Image.png";
import DotsImage from "./assets/dots-background-1.png";
import ArcImage from "./assets/Vectorarc.png";

const AboutSection = () => {
  return (
    <div className="container">
      <img src={DotsImage} alt="Background Dots" className="background-dots" />
      <img src={Starimage} alt="Star Icon" className="star-icon" />
      <div className="content">
        <span className="badge">Who we are</span>
        <h1>India's Largest Online Preparation Platform for Olympiad Exams</h1>
        <img src={ArcImage} alt=" vector-arc" className="vector-arc" />
        <p>
          Our preparation platform helps in Olympiad exam excellence through comprehensive
          practice and mock test papers. It consists of more than 3,00,000 questions, provides
          extensive practice to students to handle difficult and tricky questions that come in
          various Olympiads. Moreover, you receive continuous feedback of your child's
          performance. It's an initiative by graduates from Indian Institute of Technology
          (IITs) and top universities in US to create personalised and in-depth online learning
          experience.
        </p>
        <button className="btn">Read More</button>
      </div>
      <img src={PencilImage} alt="Pencil Icon" className="pencil-icon" />
    </div>
  );
};

export default AboutSection;
