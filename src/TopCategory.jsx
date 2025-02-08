import React from "react";
import "./TopCategory.css";
import Book1 from './assets/Booksimage1.png'
import groupPeople from './assets/peopleImage.png'
import VectorArc from './assets/Vectorarc.png'

const CareerCard = () => {
  return (
    <div className="career-container">
      
      <div className="career-image">
        <img src={groupPeople} alt="Background" className="bg-image" />
      </div>

      {/* Book Icons at Top-Left */}
      <div className="book-icons">
        <img src={Book1} alt="Book 1" className="book-icon" />
        {/* <img src={groupPeople} alt="Book 2" className="book-icon" /> */}
      </div>

      {/* Content Card */}
      <div className="career-card">
        <div className="category-tag">Top Categories</div>
        <h2 className="career-title">Career Development</h2>
        <img src={VectorArc} alt="vectorarc" className="VectorArc"/>
        <p className="career-desc">
          Not all changes in an organisation are welcome and even the best ones are not always easy. This is why many employers put a high value on executives able to lead well under pressure.
        </p>
        <button className="read-more">Read More</button>
      </div>
      
    </div>
   
  );
};

export default CareerCard;
 