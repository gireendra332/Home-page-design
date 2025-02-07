import React from "react";
import "./TrendingTech.css";
import htmlIcon from "./assets/Htmllogo.png";
import cssIcon from "./assets/Csslogo.png";
import jsIcon from "./assets/Javascript.png";
import pythonIcon from "./assets/Pythonlogo.png";
import reactIcon from "./assets/Reactlogo.png";

const TrendingTech = () => {
  const technologies = [
    { name: "HTML", icon: htmlIcon },
    { name: "CSS", icon: cssIcon },
    { name: "JavaScript", icon: jsIcon },
    { name: "Python", icon: pythonIcon },
    { name: "React", icon: reactIcon }
  ];

  return (
    <div className="trending-tech">
      <h2>
        Trending <br /> Technology
      </h2>
      <div className="tech-list">
        {technologies.map((tech, index) => (
          <div className="tech-card" key={index}>
            <img src={tech.icon} alt={tech.name} />
            <span>{tech.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrendingTech;
