import React from 'react';
import AboutItem from '../about/about-item';
import Growth from '../../images/growth.jpg';
import Exploration from '../../images/exploration.jpg';
import Community from '../../images/community.jpg';
import Carousel from 'react-elastic-carousel';

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
    <div id="about" className="about">
          <h2 className="about__title">HackBeanpot is about...</h2>
      <div className="about__desktop">{aboutChildren}</div>
      <div className="about__mobile">
        <Carousel itemsToShow={1} itemPadding={[0]}>
          {aboutInfo.map(info => (
            <AboutItem
              key={info.title}
              img={info.img}
              title={info.title}
              description={info.description}
            />
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default About;
