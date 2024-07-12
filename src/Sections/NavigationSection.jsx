import React from 'react';
import './NavigationSection.css';

export default function PartialCode({ onLoginClick }) {
  return (
    <section className="navigationSection">
      {/* Main navigation section */}

      <div className="menuFlexRow">
        <a className="bookingMenuItem">
          {/* Navigation menu item */}
          Booking
        </a>
        <a className="facilitiesMenuItem">
          {/* Navigation menu item */}
          Facilities
        </a>
        <a className="aboutUsMenuItem">
          {/* Navigation menu item */}
          About Us
        </a>
        <a className="locationMenuItem">
          {/* Navigation menu item */}
          Location
        </a>
        <a className="contactMenuItem">
          {/* Navigation menu item */}
          Contact
        </a>
        <button className="loginButton">
          {/* TODO */}
          Login
        </button>
      </div>
    </section>
  );
}



