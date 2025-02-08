import React from "react";
import "./GridCards.css";
import html from"./assets/Htmllogo.png";
import css from"./assets/Csslogo.png";  


const CardGrid = () => {
  const cards = [
    { title: "HTML", desc: "Web browsers receive HTML documents from a web server or from local storage and render the documents into multimedia web pages. HTML describes the structure of a web page semantically and originally included cues for its appearance", color: "#FFE0D1" },
    { title: "CSS", desc: "Cascading Style Sheets (CSS) is a style sheet language used for describing the presentation of a document written in a markup language such as HTML or XML (including XML dialects such as SVG, MathML or XHTML).", color: "#E0E7FF" },
    { title: "Java Script", desc: "JavaScript is a high-level, often just-in-time compiled language that conforms to the ECMAScript standard.[11] It has dynamic typing, prototype-based object-orientation, and first-class functions.", color: "#FFF3BF" },
    { title: "Java", desc: "Java is a high-level, class-based, object-oriented programming language that is designed to have as few implementation dependencies as possible.", color: "#FFE5B4" },
    { title: "Bootstrap", desc: "Bootstrap is a free and open-source CSS framework directed at responsive, mobile-first front-end web development.", color: "#E5D4FF" },
    { title: "PHP", desc: 'PHP is a recursive acronym for "PPHP is a recursive acronym for "PHP: Hypertext Preprocessor". PHP is a server side scripting language that is embedded in HTML. It is used to manage dynamic content, databases, session tracking, even build entire e-commerce sites.', color: "#D3D3D3" },
  ];

  return (
    <div className="card-grid">
      {cards.map((card, index) => (
        <div key={index} className="card" style={{ backgroundColor: card.color }}>
          <div className="card-header">
            <img src={html} alt="" className="icon" />
          </div>
          <h3>{card.title}</h3>
          <p>{card.desc}</p>
        </div>
      ))}
    </div>
  );
};

export default CardGrid;
