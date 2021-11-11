import React from 'react';
import CovidAstronautPurple from '../../images/svg-2022/covid-astronaut-purple';
import CovidAstronautRed from '../../images/svg-2022/covid-astronaut-red';
import CovidEarth from '../../images/svg-2022/covid-earth';

const CovidPrecautions = () => (
  <div className="container covid__container">
    <div className="covid__content">
      <a className="covid__header">Covid Precautions</a>
      <h2 className="covid__space-jam">Safety First!</h2>
      <p className="covid__description">
        Our Hacker Experience team will work on incorporating the appropriate
        COVID protocols to maintain safety at an in-person event. Some examples
        will be maintaining hygiene and sanitizing the event space and providing
        education to hackers on the best way to maintain COVID safety throughout
        the event as per the latest CDC guidelines.
      </p>
      <a
        href="https://hackbeanpot.us10.list-manage.com/subscribe?u=a98050d47fdae2481521f0474&id=dccd8c8431"
        role="button"
        className="header__cta"
        target="_blank"
        rel="noopener noreferrer"
      >
        Our Covid Policies
      </a>
    </div>
    <div className="covid-astronaut-purple">
      <CovidAstronautPurple />
    </div>
    <div className="covid-astronaut-red">
      <CovidAstronautRed />
    </div>
    <div className="covid-earth">
      <CovidEarth />
    </div>
  </div>
);

export default CovidPrecautions;
