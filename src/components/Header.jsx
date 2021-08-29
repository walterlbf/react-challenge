import React from 'react';
import '../styles/Header.css';
import Navbar from './Navbar';

export default function Header() {
  return (
    <>
      <section className="header">
        <Navbar/>
        <h1>Easily create or join a local nanny share with Hapu</h1>
        <p>Hapu is Airbnb for nanny share. Share your home, nanny and costs and create new flexible, affordable solutions in childcare.</p>
      </section>
    </>
  )
}
