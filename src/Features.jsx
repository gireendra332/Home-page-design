import React, { useState } from "react";
import "./Features.css";
import GroupImage from "./assets/GroupImage.png";
import VectorArc from './assets/VectorArc.png'
import hat1 from './assets/hat2.png'
import hand from './assets/hand.png'

const featuresData = [
  { title: "Study Material", description: "Get ready to learn with our easy-to-understand study materials. We have everything you need for Olympiads, CBSE, ICSE, UGC NET, and more." },
  { title: "Question Bank", description: "Get ready to learn with our easy-to-understand study materials. We have everything you need for Olympiads, CBSE, ICSE, UGC NET, and more."  },
  { title: "Test Series", description: "Get ready to learn with our easy-to-understand study materials. We have everything you need for Olympiads, CBSE, ICSE, UGC NET, and more."  },
  { title: "Previous Solved Papers", description: "Get ready to learn with our easy-to-understand study materials. We have everything you need for Olympiads, CBSE, ICSE, UGC NET, and more."  },
  { title: "Leaderboard", description: "Get ready to learn with our easy-to-understand study materials. We have everything you need for Olympiads, CBSE, ICSE, UGC NET, and more."  }
];

const Features = () => {
  const [expandedIndex, setExpandedIndex] = useState(0); // Track expanded item

  const handleClick = (index) => {
    setExpandedIndex(expandedIndex === index ? -1 : index);
  };

  return (
    <div className="features-container">
      <h2 className="features-title">Features</h2>
      <img src={VectorArc} alt="VectorArc" className="Vector" />
      <p className="features-description">
        We invest in personnel, technological innovations, and infrastructure and have established regional and international offices.
      </p>
      <div className="features-content">
        <div className="features-list">
          {featuresData.map((feature, index) => (
            <div key={index} className={`feature-item ${index === expandedIndex ? "active" : ""}`}>
              <img src={hat1} alt="hat1" className="hat1" />
              <div 
                className="feature-text-container"
                onClick={() => handleClick(index)}
              >
                <p className="title">{feature.title}</p>
                {expandedIndex === index && feature.description && (
                  <p className="text">{feature.description}</p>
                )}
              </div>
            </div>
          ))}
        </div>
        <div className="features-image">
          <img src={GroupImage} alt="Educational Illustration" />
        </div>
      </div>
      <img src={hand} alt="handimage" className="handImage" />
    </div>
  );
};

export default Features;
 