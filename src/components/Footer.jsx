import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import '../App.css';

function Footer() {
  const location = useLocation();
  const hideMainFooter = location.pathname === '/contact' || location.pathname === '/online-form';
  return (
    <footer className="mt-3 text-center">
      {!hideMainFooter && (
        <div className="card card-inline card-padded-lg">
          <h2>We Help Solve Your Legal Issues</h2>
          <p>Make life’s passages easier, generation to generation</p>
          <Link to="/contact" className="btn-contact-us">Contact Us</Link>
        </div>
      )}
      <p>&nbsp;</p>
      <Footer2 />
    </footer>
  )
}

function Footer2() {
  return (
    <>
      <p>
        Real estate, small business law, wills and estate planning attorney serving Minneapolis, Wayzata and the surrounding Twin Cities area.
      </p>
      <nav className="mt-2">
        <Link to="/" style={{ marginRight: 16 }}>Home</Link>
        <Link to="/about" style={{ marginRight: 16 }}>About</Link>
        <Link to="/services" style={{ marginRight: 16 }}>Services</Link>
        <Link to="/contact" style={{ marginRight: 16 }}>Contact</Link>
        <Link to="/online-form">On-Line Form</Link>
      </nav>
      <br />
      <p>&copy; {new Date().getFullYear()} Colyer Law. All rights reserved.</p>
    </>
  );
}

Footer2.displayName = "Footer2";



export default Footer;
