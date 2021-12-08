import React from 'react';
import PrimaryCta from '../primary-cta';
import SecondaryCta from '../secondary-cta.jsx';
import SponsorsNeptune from '../../images/svg-2022/sponsors-neptune-faded';
import SponsorsUFO from '../../images/svg-2022/sponsors-ufo-planet-faded';
import SponsorsSaturn from '../../images/svg-2022/sponsors-saturn.jsx'
import SponsorsPluto from '../../images/svg-2022/sponsors-pluto-faded.jsx'
import SponsorsVenus from '../../images/svg-2022/sponsors-venus.jsx'

const Sponsors2022 = () => (
    <div className="container ">
    <div id="sponsorship" className="sponsorship_container">
      <div className="sponsorship__content">
        <h1 className = "sponsorship__title">
          2022 Sponsors
        </h1>
        <SecondaryCta textDescription = "Galaxy Level" />
        <SecondaryCta textDescription = "Nebulae Level" />
        <SecondaryCta textDescription = "Planetary Level" />
      </div>
      <div className= "sponsorship__cta_group">
        <p class = "sponsorship__cta_label">
        Interested in joining the HackBeanpot universe?
        <br />
        <br />
        Reach out to us at team@hackbeanpot.com or 
        check out our digital sponsorship packet!
        </p>
        <PrimaryCta link="mailto:team@hackbeanpot.com" textDescription="Contact us" />
      </div>
    </div>
    <SponsorsNeptune />
      <SponsorsUFO />
      <SponsorsSaturn />
      <SponsorsPluto />
      <SponsorsVenus />
  </div>
);

export default Sponsors2022;
