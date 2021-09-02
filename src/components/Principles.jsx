import React from 'react';
import '../styles/Principles.css';
import framework from '../img/ImageSection4.png';

export default function Principles() {
  return (
    <section className="framework-section">
      <article className="framework-article">
          <h2 className="framework-title">
            A framework built for the long term
          </h2>
          <p className="framework-p">
          Childcare is for the long term. And you need a framework you can count on that gives your share long term viability and success. That’s why we’ve defined Hapu around our three tribal principles; clearly defined process, transparency over money and equality of participation.
          </p>
          <a href="/">
            Read how Hapu’s tribal background defines our app 
          </a>
      </article>
      <picture className="framework-picture">
        <img src={ framework } alt="" />
      </picture>
    </section>
  )
}
