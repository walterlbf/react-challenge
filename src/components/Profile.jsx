import React from 'react';
import profileImage from '../img/ProfileImage.png';
import '../styles/Profile.css';

export default function Profile() {
  return (
    <section className="profile-section">
      <picture className="profile-picture">
        <img src={ profileImage } alt="Profile Icon" />
      </picture>
      <div className='info'>
        <a className="profile-a" href='/'>
          Sarah’s day care available now in North Sydney</a>
        <p className="profile-p">
          Wednesday, Thursday, Friday - 7:30 - 5:30
        </p>
      </div>
    </section>
  )
}
