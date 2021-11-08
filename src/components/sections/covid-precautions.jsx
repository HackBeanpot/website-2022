import React from 'react';

const CovidPrecautions = () => (
    <div className="container covid__container">
        <div className="covid__content">
          <a className="covid__header">Covid Precautions</a>
          <h2 className="covid__space-jam">Safety First!</h2>
          <p className="covid__description">
            In light of the COVID-19 pandemic, HackBeanpot is closely monitoring
            the situation and is fully prepared to go virtual if public health
            dictates (although we really hope to see you all in person!)
          </p>
          <p className="covid__description">
            HackBeanpot is preparing to follow guidelines by the CDC by cleaning
            stuff, reducing room capacity, wearing masks, providing sanitizer
            stations, and idk what the guidelines are rn tbh.
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
    </div>
);

export default CovidPrecautions;
