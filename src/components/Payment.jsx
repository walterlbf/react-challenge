import React from 'react';
import '../styles/Payment.css';
import paymentImage from "../img/ImageSection3.png";

export default function Payment() {
  return (
    <section className="section-payment">
      <picture className="picture-payment">
        <img src={ paymentImage } alt="" />
      </picture>
      <article>
        <h2 className="payment-h2">
          Shared payments made simple
        </h2>
        <p className="payment-p">
          Sometimes it’s hard enough just sharing a restaurant bill. Try sharing that bill week in, week out and you might encounter more than a few snares. But not with Hapu. Simply set your rates and our automated payment system takes care of the rest. You need never talk money or who owes what.
        </p>
        <a href="/">Read how Bridget’s share (without Hapu) ended over $15</a>
      </article>
    </section>
  )
}
