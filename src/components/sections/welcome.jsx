import React from 'react';

import SpaceJamTitle from '../../images/svg-2022/space-jam-title';
import LightDarkModeToggle from '../../images/svg-2022/light-dark-mode-toggle';

const Welcome = ({ isLightTheme, updateIsLightTheme }) => (
  <div className="welcome__container">
     <div
          className="light-dark-toggle"
          onClick={() => updateIsLightTheme(!isLightTheme)}
        >
        <LightDarkModeToggle />
        </div>
      <div className="header__content">
          <h1 className="header__title">HackBeanpot 2022</h1>
          <SpaceJamTitle />
          <h4 className="header__description">
            Coming to a galaxy near you February XX-XX
          </h4>
        <a
          href="https://hackbeanpot.us10.list-manage.com/subscribe?u=a98050d47fdae2481521f0474&id=dccd8c8431"
          role="button"
          className="header__cta"
          target="_blank"
          rel="noopener noreferrer"
        >
          Sign up Here
        </a>
      </div>
  </div>
);

export default Welcome;
