import React from 'react';
import PrimaryCta from '../primary-cta';
import SecondaryCta from '../secondary-cta.jsx';
import SponsorsNeptuneFaded from '../../images/svg-2022/sponsors-neptune-faded';
import SponsorsUFOFaded from '../../images/svg-2022/sponsors-ufo-planet-faded';
import SponsorsSaturn from '../../images/svg-2022/sponsors-saturn'
import SponsorsPlutoFaded from '../../images/svg-2022/sponsors-pluto-faded'
import SponsorsVenusFaded from '../../images/svg-2022/sponsors-venus-faded'


const Sponsors2022 = () => (
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
        Reach out to us at team@hackbeanpot.com or <br />
        check out our digital sponsorship packet!
        </p>
        <PrimaryCta link="mailto:team@hackbeanpot.com" textDescription="Contact us" />
      </div>
      <SponsorsNeptuneFaded />
      <SponsorsUFOFaded />
      <SponsorsSaturn />
      <SponsorsPlutoFaded />
      <SponsorsVenusFaded />
    </div>
);

export default Sponsors2022;
