import React from 'react';
import { useScrollYPosition } from 'react-use-scroll-position';

import DynamicLink from './dynamic-link.jsx';
import NavLinks from '../data/nav-links.json';
import LightDarkModeToggle from '../images/svg-2022/light-dark-mode-toggle';
import LogoIcon from '../images/svg-2022/logo-icon-white.jsx';

const Nav = ({ setIsDarkTheme }) => {
  const hasScrolled = useScrollYPosition() > 0;

  return (
    <nav
      className={`nav ${hasScrolled ? 'scrolled' : ''}`}
    >
      <DynamicLink to="/" className="nav__logo">
        <LogoIcon />
      </DynamicLink>
      <ul className="nav__list">
        {NavLinks.slice(0, NavLinks.length - 2).map((link, index) => {
          return (
            <li key={`nav-item-${index}`} className="nav__item">
              <DynamicLink className="nav__link" to={link.path}>
                {link.name}
              </DynamicLink>
            </li>
          );
        })}
      </ul>
      <div
        className="light-dark-toggle"
        onClick={() => setIsDarkTheme(isDarkTheme => !isDarkTheme)}
      >
        <LightDarkModeToggle />
      </div>
    </nav>
  );
};

export default Nav;
