import React from 'react';
import SpaceJamTitle from '../../images/svg-2022/space-jam-title.svg';
import SpaceJamMars from '../../images/svg-2022/spacejam-mars.svg';
import SpaceJamSaturnOrbit from '../../images/svg-2022/space-jam-saturn-orbit.svg';
import SpaceJamEarth from '../../images/svg-2022/space-jam-earth.svg';
import SpaceJamNeptune from '../../images/svg-2022/spacejam-neptune.svg';
import PrimaryCta from '../primary-cta';

const Welcome = () => (
  <div className="header__container">
    <div className="header__content">
      <h1 className="header__title">HackBeanpot 2022</h1>
      <img className='space-jam-title' src={SpaceJamTitle} alt="the text 'space jam' with a white halo surrounding it" />
      <h4 className="header__description">
        Coming to you virtually February 11th-13th
      </h4>
      <PrimaryCta
        link="https://apply.hackbeanpot.com"
        textDescription="Applications are now open"
      />
    </div>
    <img className="space-jam-mars" src={SpaceJamMars} alt="the planet mars" />
    <img className="space-jam-saturn-orbit" src={SpaceJamSaturnOrbit} alt="the planet saturn" />
    <img className="space-jam-earth" src={SpaceJamEarth} alt="the planet earth" />
    <img className="space-jam-neptune" src={SpaceJamNeptune} alt="the planet neptune" />
  </div>
);

export default Welcome;
