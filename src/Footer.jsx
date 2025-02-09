import React from "react";
import "./Footer.css";
import Logo from './assets/Logo.png'
import twitterLogo from './assets/twitter.png'
import facebookLogo from './assets/Facebook.png'
import instagramLogo from './assets/instagram.png'
import githubLogo from './assets/github.png'


const Footer = () => {
  return (
    <footer className="footer">
      
      <div className="feedback-section">
        <h2>Add Valuable Feedback</h2>
        <button className="feedback-btn">Add Feedback</button>
      </div>

    
      <div className="footer-content">
        
        <div className="footer-about">
          <div className="logo">
            <img src={Logo} alt="CS Buzz Logo" />
          </div>
          <h3>About CS Buzz</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam dictum aliquet accumsan porta lectus
            ridiculus in mattis. Netus sodales in volutpat ullamcorper amet adipiscing fermentum.
          </p>
        </div>

        
        <div className="footer-links">
          <div className="footer-column">
            <h4>Company</h4>
            <ul>
              <li>About</li>
              <li>Features</li>
              <li>Works</li>
              <li>Career</li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>Help</h4>
            <ul>
              <li>Customer Support</li>
              <li>Delivery Details</li>
              <li>Terms & Conditions</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>Resources</h4>
            <ul>
              <li>Free eBooks</li>
              <li>Development Tutorial</li>
              <li>How to - Blog</li>
              <li>YouTube Playlist</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="footer-bottom">
        <p>
          Nullam dictum aliquet accumsan porta lectus ridiculus in mattis. Netus sodales in volutpat ullamcorper amet
          adipiscing fermentum.
        </p>
        <div className="social-icons">
          <img src={twitterLogo} alt="Twitter" />
          <img src={facebookLogo} alt="Facebook" className="facebook" />
          <img src={instagramLogo} alt="Instagram" />
          <img src={githubLogo} alt="GitHub" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
 