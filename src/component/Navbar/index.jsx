import React from 'react';
import "./style.css";


function Navbar() {
  return (
    <div>
      <section className="container">
        <nav className="navbar">
          <div className="logo">Healphil</div>
          <ul className="nav-links">
            <input type="checkbox" id="checkbox_toggle" />
            <label for="checkbox_toggle" className="hamburger">&#9776;</label>
            <div className="menu">
              <li><a href="#">Home</a></li>
              <li><a href="#about">About</a></li>
              <li className="services">
                <a href="#services">Services</a>
                <ul className="dropdown">
                  <li><a href="#">Treatment </a></li>
                  <li><a href="#">Medication</a></li>
                  <li><a href="#">Safety</a></li>
                  <li><a href="#">Examines</a></li>
                  <li><a href="#">Control</a></li>
                </ul>
              </li>
              <li><a href="#features">Features</a></li>
              <li><a href="#contact">Contact</a></li>
            </div>
          </ul>
        </nav>
      </section>
      <div class="wave">
            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
              <path d="M1200 0L0 0 598.97 114.72 1200 0z" class="shape-fill"></path>
            </svg>
          </div>
    </div>
  )
}

export default Navbar;