import React from 'react';
import CovidAstronautPurple from '../../images/svg-2022/covid-astronaut-purple.svg';
import CovidAstronautRed from '../../images/svg-2022/covid-astronaut-red.svg';
import CovidEarth from '../../images/svg-2022/space-jam-earth.svg';

const CovidPrecautions = () => (
  <div className="container ">
    <div id="covid-safety" className="covid__container">
      <div className="covid__content">
        <div className="covid__header">Covid Precautions</div>
        <h2 className="covid__space-jam">Safety First!</h2>
        <p className="covid__description">
          For the foreseeable future, HackBeanpot is planning to be an in-person
          event with hybrid elements only in areas where they would enhance our
          event. This means that we plan for hackers and staff to be 100%
          in-person and the majority of our mentors, speakers, and sponsors to
          be in-person (outside of overnight mentors or really cool speakers).
          We are closely monitoring event guidelines from the CDC and
          Boston-area schools in order to transition to a virtual event if that
          becomes the necessary method to host an event that keeps the safety of
          everyone in mind, but we'd really like to see everyone in-person
          again!
        </p>
        <p className="covid__description">
          For our in-person event, our team is hard at work incorporating the
          appropriate COVID protocols to maintain safety. Some examples of this
          include maintaining hygiene, frequently sanitizing the event space,
          and providing education to hackers on the best way to maintain COVID
          safety throughout the event as per the latest CDC guidelines. We hope
          that all astronauts feel comfortable with our COVID safety plan, but
          we'd love to hear from you otherwise!
        </p>
      </div>
      <img className="covid-astronaut-purple" src={CovidAstronautPurple} alt="a floating purple astronaut" />
      <img className="covid-astronaut-red" src={CovidAstronautRed} alt={"a floating red astronaut"} />
      <img className="covid-earth" src={CovidEarth} alt="earth" />
    </div>
  </div>
);

export default CovidPrecautions;
