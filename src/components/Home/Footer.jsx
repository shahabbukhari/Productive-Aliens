import React from "react";

function Footer() {
  return (
    <footer>
      <div className="footer-about">
        <h1>PRODUCTIVE ALLIANCE</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, varius
          fringilla velit habitant et, dictum.
        </p>
        <a href="#" className="button">
          JOIN OUR TEAM
        </a>
      </div>
      <div className="footer-links">
        <div className="footer-links-menu">
          <p>Menu</p>
          <ul>
            <li>Home</li>
            <li>Events</li>
            <li>Success Stories</li>
            <li>Services</li>
            <li>Sign in</li>
          </ul>
        </div>
        <div className="footer-links-services">
          <p>Services</p>
          <ul>
            <li>Chair Massage</li>
            <li>Yoga</li>
            <li>Nutrition</li>
            <li>Chiropractors</li>
            <li>Reflexology</li>
            <li>Paraphin Wax</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
