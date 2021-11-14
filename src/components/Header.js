import React, { useState } from "react";
import { Link } from "react-router-dom";

import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "../styles/Header.css";

const Header = () => {
  const [showMobileMenu, setMobileMenu] = useState(false);

  const toggleNavButton = () => {
    return setMobileMenu(!showMobileMenu);
  };

  const closeNavMenu = () => {
    return setMobileMenu(false);
  };

  return (
    <header className="header">
      <div className="branding">
        <Link to="/" onClick={() => closeNavMenu()}>
          Bubbly Bartending
        </Link>
      </div>

      <button className="mobile-nav__button" onClick={() => toggleNavButton()}>
        <FontAwesomeIcon
          className="mobile-nav__button--icon"
          icon={showMobileMenu ? faTimes : faBars}
        />
      </button>

      <nav className={showMobileMenu ? "nav-menu active" : "nav-menu"}>
        <ul>
          <li>
            <Link to="/themeBar" onClick={() => toggleNavButton()}>
              Theme Bar
            </Link>
          </li>
          <li>
            <Link to="/services" onClick={() => toggleNavButton()}>
              Services
            </Link>
          </li>
          <li>
            <Link to="/cocktails" onClick={() => toggleNavButton()}>
              Cocktails
            </Link>
          </li>
          <li>
            <Link to="/workshops" onClick={() => toggleNavButton()}>
              Workshops
            </Link>
          </li>
          <li>
            <Link
              to="/bookEvent"
              onClick={() => toggleNavButton()}
              className="nav-menu__highlight"
            >
              Book Event
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
export default Header;
