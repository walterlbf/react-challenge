import React from 'react';
import '../styles/Share.css';
import ShareImage from '../img/ImageSection1-desktop.png';

export default function Share() {
  return (
    <section className="share-section">
        <article>
          <h2 className="share-h2">
            Share your home, <br /> nanny and costs
          </h2>
          <p className="share-p">
            You have a fantastic home, a fantastic nanny and wouldn’t cutting your costs in half be, well, fantastic?! If only it was easy to connect with other parents to share your costs? Well now it is, with Hapu. <a href="/">Hapu means tribe</a> and it’s our foundational 3 tribal principles that empowers you to create and manage your own tribe. A tribe that together has the power to create new affordable solutions in childcare that work for you and your community.
          </p>
          <a href="/">
            Ready to get started?
          </a>
        </article>
        <picture className="share-picture">
          <img src={ ShareImage } alt="" />
        </picture>
    </section>
  )
}
