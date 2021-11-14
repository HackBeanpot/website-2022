import React from 'react';
import AboutItem from '../about/about-item';
import Growth from '../../images/growth.jpg';
import Exploration from '../../images/exploration.jpg';
import Community from '../../images/community.jpg';
import Flickity from 'react-flickity-component';

const aboutInfo = [
  {
    img: Exploration,
    title: 'Exploration',
    description:
      'Discover new ideas and technologies (and maybe even galaxies?!) with the help of experienced mentors.'
  },
  {
    img: Community,
    title: 'Community',
    description:
      'Connect with fellow students and our partners in the Boston tech community. Build connections that will last for lightyears!'
  },
  {
    img: Growth,
    title: 'Growth',
    description:
      'Expand beyond your horizons and grow your current skill set in a safe and supportive environment. '
  }
];

const flickityOptions = {
  wrapAround: true,
  prevNextButtons: true,
  pageDots: true,
};

const About = props => {
  const aboutChildren = aboutInfo.map(info => (
    <AboutItem
      key={info.title}
      img={info.img}
      title={info.title}
      description={info.description}
    />
  ));
  return (
    <div id='about' className='about'>
      <h2 className='about__title'>HackBeanpot is about...</h2>
      <Flickity
        className={'about__mobile'}
        options={flickityOptions} // takes flickity options {}
      >
        {aboutInfo.map(({ img, title, description}) => (
          <div className="about-item-mobile">
            <img className="about-item-img" src={img} alt="ooga booga" />
            <div className="about-item-text-container">
              <h2 className="about-item-title">{title}</h2>
              <p>{description}</p>
            </div>
          </div>
        ))}
      </Flickity>
      <div className="about__desktop">
        {aboutChildren}
      </div>
    </div>
  );
};

export default About;
