import React from 'react';
import SpaceJamTitle from '../../images/svg-2022/space-jam-title';
import SpaceJamMars from '../../images/svg-2022/space-jam-mars';
import SpaceJamSaturnOrbit from '../../images/svg-2022/space-jam-saturn-orbit';
import SpaceJamEarth from '../../images/svg-2022/space-jam-earth';
import SpaceJamNeptune from '../../images/svg-2022/space-jam-neptune';
import PrimaryCta from '../primary-cta';

const Welcome = () => (
  <div className="header__container">
    <div className="header__content">
      <h1 className="header__title">HackBeanpot 2022</h1>
      <SpaceJamTitle />
      <h4 className="header__description">
        Coming to a galaxy near you in February
      </h4>
      {/*<PrimaryCta*/}
      {/*  link="https://hackbeanpot.us10.list-manage.com/subscribe?u=a98050d47fdae2481521f0474&id=dccd8c8431"*/}
      {/*  textDescription="Join our mailing list"*/}
      {/*/>*/}
      <PrimaryCta
        link="https://apply.hackbeanpot.com"
        textDescription="Applications Open! Apply now"
      />
    </div>
    <SpaceJamMars />
    <SpaceJamSaturnOrbit />
    <SpaceJamEarth />
    <SpaceJamNeptune />
  </div>
);

export default Welcome;
