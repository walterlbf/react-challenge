import React from 'react';
import '../styles/Navbar.css';
import Badge from '../img/Badge.svg';

export default function Navbar() {
return (
  <header>
    <section className="section-nav">
      <picture>
        <img className="logo" src={Badge} alt="" />
      </picture>
      <nav className="navbar">
        <ul className="ul-nav-header">
          <li>
            <a className='link-nav' href="/">
              Create Your Nanny Share
            </a>
          </li>
          <li>
            <a className='link-nav' href="/">
              Browse Share
            </a>
          </li>
          <li>
            <a className='link-nav' href="/">
              Our Story
            </a>
          </li>
        </ul>
      </nav>
      <section className="right-content">
        <button className="button-navbar">Become a Nanny Share Host</button>
        <a href="/" className='link-nav'> Sing In </a>
      </section>
    </section>
  </header>
)
}
