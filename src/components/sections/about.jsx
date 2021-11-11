import React, { useState } from 'react';
import AboutItem from '../about/about-item';
import Growth from '../../images/growth.jpg';
import Exploration from '../../images/exploration.jpg';
import Community from '../../images/community.jpg';
const About = props => {
  const aboutInfo = [
    {
      img: Community,
      title: 'Community',
      description:
        'Connect with fellow students and our partners in the Boston tech community. Build connections that will last for lightyears!'
    },
    {
      img: Exploration,
      title: 'Exploration',
      description:
        'Discover new ideas and technologies (and maybe even galaxies?!) with the help of experienced mentors.'
    },
    {
      img: Growth,
      title: 'Growth',
      description:
        'Expand beyond your horizons and grow your current skill set in a safe and supportive environment. '
    }
  ];

  return (
    <div id="about" className="about__container">
      <h2 className="about__title">HackBeanpot is about...</h2>
      <div className="about-content">
        {aboutInfo.map(info => (
          <AboutItem
            img={info.img}
            title={info.title}
            description={info.description}
          />
        ))}
      </div>
    </div>
  );
};

export default About;
