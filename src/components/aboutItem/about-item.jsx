import React, {useState} from 'react';
import AboutLeftFoot from "../../images/svg/about-leftfoot";
const AboutItem = props => {

  return (
    <div id="about" className="about-item">
      <h2 className="about__title">
        HackBeanpot is about...
      </h2>
      <div className='about-content'>
        <div className="about-footsteps">
          <AboutLeftFoot/>
        </div>
      </div>
    </div>
  )
}

export default AboutItem;
