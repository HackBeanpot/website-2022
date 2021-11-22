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
//   {
//     img: Community,
//     title: 'Community',
//     description:
//       'Connect with fellow students and our partners in the Boston tech community. Build connections that will last for lightyears!'
//   },
//   {
//     img: Growth,
//     title: 'Growth',
//     description:
//       'Expand beyond your horizons and grow your current skill set in a safe and supportive environment. '
//   }
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
