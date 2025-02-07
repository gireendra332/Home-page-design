import React from 'react'
import './Herosection.css'
import imageHero from './assets/OBJECTS.png'

const Herosection = () => {
  return (
    <section className="hero-section">
    
    <div className="hero-left">
      <img src={imageHero} alt="Illustration" className="hero-image" />
    </div>

   
    <div className="hero-right">
      <span className="hero-badge">EXPERT INSTRUCTION</span>
      <h1>Build Skills With Experts Any <br />Time, Anywhere</h1>
      <p>
        We invest in personnel, technological innovations and <br/>infrastructure 
        and have established regional and international<br/>offices.
      </p>
    </div>
  </section>
  )
}

export default Herosection
