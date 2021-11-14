import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faInstagram } from "@fortawesome/free-brands-svg-icons";

import "../styles/Footer.css";
import { faCalendarAlt } from "@fortawesome/free-regular-svg-icons";

const Footer = () => {
  return (
    <footer className="footer">
      <section className="footer-line">
        <section className="contactInfo">
          <p className="contactInfo-email">
            email: {"  "}
            <a
              className="contactInfo-email__address"
              href="mailto:bubblybartendingllc@gmail.com"
            >
              bubblybartendingllc@gmail.com
            </a>
          </p>
          <p className="contactInfo-phone">
            phone: <span className="contactInfo-phone__number">7248824836</span>
          </p>
        </section>
        <section className="social">
          <a href="https://www.facebook.com/bubblybartendingLLC">
            <FontAwesomeIcon className="social-icon" icon={faFacebookF} />
          </a>
          <a href="http://instagram.com/Bubblybartendingllc/">
            <FontAwesomeIcon className="social-icon" icon={faInstagram} />
          </a>
          <a href="https://calendly.com/bubblybartendingllc">
            <FontAwesomeIcon className="social-icon" icon={faCalendarAlt} />
          </a>
        </section>
      </section>
      <section className="copyright">©2021 by Bubbly Bartending LLC.</section>
    </footer>
  );
};
export default Footer;
