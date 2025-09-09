import React from 'react';
import '../App.css';

function Footer() {
  return (
    <footer className="mt-3 text-center">
      <p>Real estate, small business law, wills and estate planning attorney serving Minneapolis, Wayzata and the surrounding Twin Cities area.</p>
      <nav className="mt-2">
        <a href="/" style={{ marginRight: 16 }}>Home</a>
        <a href="/about" style={{ marginRight: 16 }}>About</a>
        <a href="/services" style={{ marginRight: 16 }}>Services</a>
        <a href="/contact" style={{ marginRight: 16 }}>Contact</a>
        <a href="/online-form">On-Line Form</a>
      </nav>
      <br />
      <p>&copy; {new Date().getFullYear()} Colyer Law. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
