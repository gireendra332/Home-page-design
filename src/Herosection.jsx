import React from 'react'
import './Herosection.css'
import imageHero from './assets/OBJECTS.png'
import BackGround from './assets/Background.png'
import vector from './assets/VectorArc.png'

const Herosection = () => {
  return (
    <div className="hero-container">
      <section className="hero-section">  
        <div className="hero-bg">
          <img src={BackGround} alt="Background" />
        </div>
        <div className="hero-left">
          <img src={imageHero} alt="Illustration" className="hero-image" />
        </div>
        <div className="hero-right">
          <span className="hero-badge">EXPERT INSTRUCTION</span>
          <h2 className='title'>Build Skills With Experts Any Time, Anywhere</h2>
          <img src={vector} alt="" className="vector" />
            
              
            
           
          <p>
            We invest in personnel, technological innovations and <br />infrastructure 
            and have established regional and international<br />offices.
          </p>
        </div>
      </section>
    </div>
  )
}

export default Herosection
