import React from 'react';
import '../styles/Footer.css';
import calendarIcon from '../img/CalendarIcon.svg';
import Logo from '../img/Logo.svg';
import facebook from '../img/Facebook.svg';
import instagram from '../img/Instagram.svg';
import twitter from '../img/Twitter.svg';

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
      <section className="footer-nav">
        <picture className="picture-logo">
          <img src={ Logo } alt="Hapu Logo" />
        </picture>
        <nav>
          <ul>
            <li>
              Share Your Nanny
            </li>
            <li>
              Our Story
            </li>
            <li>
              Blog
            </li>
            <li>
              Terms &amp; Privacy
            </li>
          </ul>
        </nav>
      </section>
      <section className="social-icons">
        <a href='https://www.facebook.com/hapunui' target='_blank'>
          <img src={facebook} alt='Facebook of Hapu' />
        </a>
        <a href='https://twitter.com/hapunui' target='_blank'>
          <img src={twitter} alt='Twitter of Hapu' />
        </a>
        <a href='https://www.instagram.com/hapunui' target='_blank'>
          <img src={instagram} alt='Instagram of Hapu' />
        </a>
      </section>
      <div className="divider-footer"></div>
      <p className="copyright">
        Copyright © 2017 Hapu PTY Limited All rights reserved
      </p>
    </footer>
  )
}
