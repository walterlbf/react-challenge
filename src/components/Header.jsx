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
          <article className="article-header">
            <h1 className="header-h1">
              Easily create or join a local nanny share with Hapu
            </h1>
            <p>
              Hapu is Airbnb for nanny share. Share your home, nanny and costs and create new flexible, affordable solutions in childcare.
            </p>
          </article>
        </div>
          <div className="playLink">
            <img src={ playImage } alt="" />
            <a className="tag-a-header" href="/">See hapu in action (27 seconds)</a>
          </div>
      </section>
    </>
  )
}
