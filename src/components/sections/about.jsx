import React from 'react';
import AboutItem from '../about/about-item';
import { StaticImage } from 'gatsby-plugin-image';
import Carousel from 'react-elastic-carousel';

const Exploration = <StaticImage className="about-item-img" src='../../images/exploration.jpg' alt='a mentor teaching a hacker' />
const Community = <StaticImage className="about-item-img" src='../../images/community.jpg' alt='the HBP 2020 core team' />
const Growth = <StaticImage className="about-item-img" src='../../images/growth.jpg' alt='a few hackers giving a thumbs up to the camera' />

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

const About = () => {
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
        <Carousel itemsToShow={1} itemPadding={[0]} isRTL={false}>
          {aboutChildren}
        </Carousel>
      </div>
    </div>
  );
};

export default About;
