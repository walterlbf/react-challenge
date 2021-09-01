import React from 'react';
import '../styles/Footer.css';
import calendarIcon from '../img/CalendarIcon.svg';
import Logo from '../img/Logo.svg';

export default function Footer() {
  return (
    <footer>
      <section className="footer-section">
        <article>
          <h2 className="footer-h2">
            Become a nanny share host
          </h2>
          <p className="footer-p">
            Takes less than 5 minutes to get started
          </p>
          <button className="footer-button">
            <picture className="picture-calendar">
              <img src={ calendarIcon } alt="" />
            </picture>
            <div className="flex-button">
              <span className="span-1">
                Create Your Nanny Share
              </span>
              <span className="span-2">
                Takes less than 5 minutes
              </span>
            </div>
          </button>

          <a href="/">
            Or browse local nanny-shares
          </a>
        </article>
      </section>
      <section>
        <picture>
          <img src={ Logo } alt="Hapu Logo" />
        </picture>
        <nav>
          <ul>
            <li>Share Your Nanny</li>
            <li>Our Story</li>
            <li>Blog</li>
            <li>Terms & Privacy</li>
          </ul>
        </nav>
        <picture>
         
        </picture>
      </section>
      <div className="divider"></div>
      <p>
        Copyright © 2017 Hapu PTY Limited All rights reserved
      </p>
    </footer>
  )
}
