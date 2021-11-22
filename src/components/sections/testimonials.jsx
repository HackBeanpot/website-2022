import React from 'react';
import TestimonialsItem from '../testimonials-items/testimonial-item';
import Growth from '../../images/growth.jpg';
import Exploration from '../../images/exploration.jpg';
import Community from '../../images/community.jpg';
import Carousel from 'react-elastic-carousel';

const testimonialInfo = [
  {
    img: Exploration,
    author: 'Ben Henderson',
    description:
      ' It was my first Hackathon, and I had a really great time - if you\'ve never done one before, this is a great choice. Really good environment for people who want to learn something new, meet new people, and/or challenge themselves. It\'s basically what you make of it, and there was plenty of support available if you have no idea what you\'re doing.'
  },
  {
    img: Community,
    author: 'Albert Zhang',
    description:
      'This was my second hackathon ever and it was a lot of fun! The mentors were super helpful, and I was able to play around with Tensorflow, which is something I\'ve never done before.'
  },
  {
    img: Growth,
    author: 'Onotina Imoudu',
    description:
      'This was my first hackathon and I am definitely attending next year!!! Hackbeanpot is a must attend for anyone who has a passion or wants to get their feet wet in design or coding. And we had a zoom-ba session!! A zumba class on zoom, it was really fun, I was sweaty and out of breath.'
  },
  {
    img: Growth,
    author: 'Anonymous',
    description:
      'HackBeanpot is an awesome way to get introduced to the world of Hackathons, and everyone here is just excited for you to learn.'
  }
];

const Testimonials = props => {
  const testimonialChildren = testimonialInfo.map(info => (
    <TestimonialsItem
      key={info.author}
      img={info.img}
      author={info.author}
      description={info.description}
    />
  ));
  return (
    <div id="about" className="testimonials">
          <h2 className="testimonials__title">Testimonials</h2>
      <div className="testimonials__desktop">{testimonialChildren}</div>
      {/* <div className="about__mobile">
        <Carousel itemsToShow={1} itemPadding={[0]}>
          {testimonialInfo.map(info => (
            <TestimonialsItem
              key={info.title}
              img={info.img}
              title={info.title}
              description={info.description}
            />
          ))}
        </Carousel>
      </div> */}
    </div>
  );
};

export default Testimonials;
