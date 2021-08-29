import React from 'react';
import '../styles/Header.css';
import Navbar from './Navbar';
import playImage from '../img/playButton.svg';

export default function Header() {
  return (
    <>
      <section className="header">
        <Navbar/>
        <div className="article-div">
          <article>
            <h1>
              Easily create or join a local nanny share with Hapu
            </h1>
            <p>
              Hapu is Airbnb for nanny share. Share your home, nanny and costs and create new flexible, affordable solutions in childcare.
            </p>
          </article>
        </div>
          <a href="/">
            <img src={ playImage } alt="" />
            See hapu in action (27 seconds)
          </a>
      </section>
    </>
  )
}
