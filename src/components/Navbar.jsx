import React from 'react';
import '../styles/Navbar.css';
import Badge from '../img/Badge.svg';

export default function Navbar() {
return (
  <>
    <nav>
      <img className="logo" src={Badge} alt="" />
      {/* <ul className="navbar">
        <li>
          <a href="">Create Your Nanny Share</a>
        </li>
        <li>
          <a href="">Browse Share</a>
        </li>
        <li>
          <a href="">Our Story</a>
        </li>
      </ul> */}
      
      <button>Become a Nanny Share Host</button>
    </nav>
  </>
)
}
