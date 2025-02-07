import React from 'react';  
import './Navbar.css';
import Logo from './assets/Logo.png';
import Searchicon from "./assets/Group 1261153725.png"
import Loginicon from "./assets/Group 1261153562.png"

 
function Navbar() {
  return (
    <div className="navbar-container">
      <nav className="navbar">
        <div className='logo'>
            <img src={Logo} alt="" />
        </div>
      <div className="search-bar">
        
          <img src={Searchicon} alt="" />
          <input type="text" placeholder="Search here" />
        </div>
        <div className="nav-links"> 
          <a href="/">Home</a>
          <a href="/olympiad">Olympiad</a>
          <a href="/cbse">CBSE</a>
          <a href="/cuet">CUET</a>
          

        </div>
        <div className="Login">
            <a href="/login">Login</a>
            <img src={Loginicon} alt="" />
          </div>
        
      </nav>
      
    </div>
  );
}

export default Navbar;