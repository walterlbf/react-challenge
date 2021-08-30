import React from 'react';
import profileImage from '../img/ProfileImage.png';
import '../styles/Profile.css';

export default function Profile() {
  return (
    <section className="profile-section">
      <img src={profileImage} alt="Profile Icon" />
      <div className='info'>
        <a className="a" href='/'>Sarah’s day care available now in North Sydney</a>
        <p className="p">Wednesday, Thursday, Friday - 7:30 - 5:30</p>
      </div>
    </section>
  )
}
