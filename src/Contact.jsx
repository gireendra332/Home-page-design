import React from "react";
import "./Contact.css";
import womenImg from "./assets/women.png"
import topRightImg from "./assets/pencil-pair.png"
import bottomLeftImg from "./assets/book and apple.png"

const ContactForm = () => {
  return (
    <div className="contact-wrapper">
      
      <img src={topRightImg} alt="Top Right Decoration" className="top-right-image" />

      <div className="contact-container">
       
        <div className="contact-image">
          <img src={womenImg} alt="Illustration" />
        </div>

      
        <d  iv className="contact-form">
          <button className="contact-btn">Get in Touch With Us?</button>
          <h2 className="contact-title">Call us on our number</h2>
          <p className="contact-number">7988315190</p>

          <form>
            <label>Full Name</label>
            <input type="text" placeholder="Input Your Name" />

            <label>Email</label>
            <input type="email" placeholder="Input Your Email" />

            <label>Message</label>
            <textarea placeholder="Write Message..."></textarea>

            <button type="submit" className="enquiry-btn">Enquiry</button>
          </form>
        </d>
      </div>

      
      <img src={bottomLeftImg} alt="Bottom Left Decoration" className="bottom-left-image" />
    </div>
  );
};

export default ContactForm;
