import React from 'react';
import '../styles/Navbar.css';
import Logo from '../img/logo.svg';

export default function Navbar() {
return (
  <>
    <nav>
      <img className="logo" src={Logo} alt="" />
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
