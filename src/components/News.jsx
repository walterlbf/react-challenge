import React from 'react';
import '../styles/News.css';
import DailyDiary from '../img/ImageSection5.png';

export default function News() {
  return (
    <section className="news-section">
      <img src={ DailyDiary } alt="" />
      <article>
          <h2 className="news-title">
            Coming soon: Nanny Share Daily Diary!
          </h2>
          <p className="news-p">
            With the Hapu daily diary your nanny will be able to update you and your sharers with photos and commentary of the day. You and sharers will receive notifications and you’ll be able to login to view the daily adventures fo your little ones. We can’t wait!
          </p>
          <a className="share-a" href="/">
            Ready to get started?
          </a>
      </article>
    </section>
  )
}
