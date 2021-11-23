import React from 'react';
import TestimonialsItem from '../testimonials-items/testimonial-item';
import BenHenderson from '../../images/ben-henderson.jpg';
import AlbertZhang from '../../images/albert-zhang.jpg';
import OnotinaImoudu from '../../images/onotina-imoudu.jpg';
import Anonymous from '../../images/anonymous.jpg';

const testimonialInfo = [
  {
    img: BenHenderson,
    author: 'Ben Henderson',
    description:
      ' It was my first Hackathon, and I had a really great time - if you\'ve never done one before, this is a great choice. Really good environment for people who want to learn something new, meet new people, and/or challenge themselves. It\'s basically what you make of it, and there was plenty of support available if you have no idea what you\'re doing.'
  }
//   {
//     img: AlbertZhang,
//     author: 'Albert Zhang',
//     description:
//       'This was my second hackathon ever and it was a lot of fun! The mentors were super helpful, and I was able to play around with Tensorflow, which is something I\'ve never done before.'
//   },
//   {
//     img: OnotinaImoudu,
//     author: 'Onotina Imoudu',
//     description:
//       'This was my first hackathon and I am definitely attending next year!!! Hackbeanpot is a must attend for anyone who has a passion or wants to get their feet wet in design or coding. And we had a zoom-ba session!! A zumba class on zoom, it was really fun, I was sweaty and out of breath.'
//   },
//   {
//     img: Anonymous,
//     author: 'Anonymous',
//     description:
//       'HackBeanpot is an awesome way to get introduced to the world of Hackathons, and everyone here is just excited for you to learn.'
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
    <div id="testimonials" className="testimonials__container">
          <h2 className="testimonials__title">Testimonials</h2>
      <div className="testimonials__box">{testimonialChildren}</div>
      // another div for checking out archive
    </div>
  );
};

export default Testimonials;
