import React from 'react'
import './Navbar.css';

function Navbar() {
  return (
 <nav className='main-nav'>
       <input className='menu-toggle-input' type='checkbox' id='menu-toggle'/>
       <label className="menu-toggle" htmlFor="menu-toggle" aria-label="Open menu" aria-controls="mobile-menu">
       <span></span>
    <span></span>
    <span></span>
  </label>


  <ul className='nav-left'>
     <li> <a href="#home">Home</a></li>
      <li><a href="#about">ABOUT<span className="chevron">⌄</span></a></li>
         <li className="dropdown-parent">
        <a href="#legacy">LEGACY<span className="chevron">⌄</span></a>
        <ul className="dropdown">
            <li><a href="#">FLASHBACK FILES</a></li>
            <li><a href="#">THE PIONEERS</a></li>
            <li><a href="#">GALLERY</a></li>
            <li><a href="#">DIGITAL ARCHIVES</a></li>
        </ul>
    </li>
     <li><a href="#spaces">INITIATIVES<span className="chevron">⌄</span></a></li>
    <li><a href="#spaces">SPACES<span className="chevron">⌄</span></a></li>
  </ul>
 
 
  <div className='logo-wrap'>
    <img src="/images/logo.jpeg" alt="INT Aditya Birla Performing Arts Academy" />
  </div>
          
          
             <ul className="nav-right">
  <li>
    <a href="#pulse">PULSE &amp; PAGE<span className="chevron">⌄</span></a>
  </li>
  <li>
    <a href="#contact">HELLO</a>
  </li>
  <li>
    <a href="#showtime" className="btn-book">BOOK NOW</a>
  </li>
  <li className="search-btn">
    <a href="#" className="icon-btn search-icon" aria-label="Search">
      <svg viewBox="0 0 24 24">
        <circle cx="11" cy="11" r="7"></circle>
        <line x1="16.5" y1="16.5" x2="21" y2="21"></line>
      </svg>
    </a>
  </li>
  <li className="profile-btn">
    <a href="#" className="icon-btn profile-icon" aria-label="Profile">
      <svg viewBox="0 0 24 24">
        <circle cx="12" cy="7.5" r="3.5"></circle>
        <path d="M5 21c0-4 2.8-6.5 7-6.5s7 2.5 7 6.5"></path>
      </svg>
    </a>
  </li>
</ul>
 </nav>
  )
}

export default Navbar
