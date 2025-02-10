import React from "react";
import "./GridCards.css";
import htmlLogo from "./assets/Htmllogo.png";
import cssLogo from "./assets/Csslogo.png";
import jsLogo from "./assets/javascript.png";
import javaLogo from "./assets/javalogo.png";
import phpLogo from "./assets/phplogo.png";
import BootStrapLogo from './assets/bootstraplogo.png'
import bottomRightImage from "./assets/Booksimage2.png";
import backGround from "./assets/Big backgroound.png";  

const CardGrid = () => {
  const cards = [
    { 
      title: "HTML", 
      desc: "Web browsers receive HTML documents from a web server or from local storage and render the documents into multimedia web pages. HTML describes the structure of a web page semantically and originally included cues for its appearance.", 
      color: "#F1F1F1", 
      logo: htmlLogo, 
      logoBg: "#FFD6CC" 
    },
    { 
      title: "CSS", 
      desc: "Cascading Style Sheets (CSS) is a style sheet language used for describing the presentation of a document written in a markup language such as HTML or XML (including XML dialects such as SVG, MathML or XHTML).", 
      color: "#F1F1F1", 
      logo: cssLogo, 
      logoBg: "#B6C5FF" 
    },
    { 
      title: "JavaScript", 
      desc: "JavaScript is a high-level, often just-in-time compiled language that conforms to the ECMAScript standard. It has dynamic typing, prototype-based object-orientation, and first-class functions.", 
      color: "#F1F1F1", 
      logo: jsLogo, 
      logoBg: "#FFF8D5" 
    },
    { 
      title: "Java", 
      desc: "Java is a high-level, class-based, object-oriented programming language that is designed to have as few implementation dependencies as possible.", 
      color: "#F1F1F1", 
      logo: javaLogo, 
      logoBg: "#FFE6CF" 
    },
    { 
      title: "BootStrap", 
      desc: "Bootstrap is a free and open-source CSS framework directed at responsive, mobile-first front-end web development.", 
      color: "#F1F1F1", 
      logo: BootStrapLogo, 
      logoBg: "#EDE0FF" 
    },
    { 
      title: "PHP", 
      desc: 'PHP is a recursive acronym for "PHP: Hypertext Preprocessor". PHP is a server-side scripting language embedded in HTML. It is used to manage dynamic content, databases, session tracking, and build entire e-commerce sites.', 
      color: "#F1F1F1", 
      logo: phpLogo, 
      logoBg: "#E8E9FF  " 
    }
  ];

  return (
    <div className="grid-container">
      <div className="background-wrapper">
        <img src={backGround} alt="" className="background-image" />
      </div>
      <div className="card-grid">
        {cards.map((card, index) => (
          <div key={index} className="card" style={{ backgroundColor: card.color }}>
            <div className="card-header" style={{ backgroundColor: card.logoBg }}>
              <img src={card.logo} alt={card.title} className="icon" />
            </div>
            <p className="title-text">{card.title}</p>
            <p>{card.desc}</p>
          </div>
        ))}
        <div className="bottom-right-image">
          <img src={bottomRightImage} alt="Extra Design Element" />
        </div>
      </div>
    </div>
  );
};

export default CardGrid;
