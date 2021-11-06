import React, {useState} from 'react';
import AboutItem from '../about/about-item';
import Growth from '../../images/growth.jpg';
const About = props => {

  return (
    <div id="about" className="about__container">
      <h2 className="about__title">
        HackBeanpot is about...
      </h2>
      <div className='about-content'>
        <AboutItem img={Growth} title="Growth" description="akjsdhflkjashdfkl"/>
      </div>
    </div>
  )
}

export default About;
