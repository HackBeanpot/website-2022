import React, {useState} from 'react';
import TestimonialsItem from '../testimonials-items/testimonial-item';
import BenHenderson from '../../images/ben-henderson.jpg';
import AlbertZhang from '../../images/albert-zhang.jpg';
import OnotinaImoudu from '../../images/onotina-imoudu.jpg';
import Anonymous from '../../images/anonymous.jpg';
import TestimonialsMarsDim from '../../images/svg-2022/testimonials-mars-dim';
import TestimonialsMercuryDim from '../../images/svg-2022/testimonials-mercury-dim';
import TestimonialsNeptuneDim from '../../images/svg-2022/testimonials-neptune-dim';
import TestimonialsVenusDim from '../../images/svg-2022/testimonials-venus-dim';
import TestimonialsMercuryBright from '../../images/svg-2022/testimonials-mercury-bright';

const testimonialInfo = [
  {
    img: BenHenderson,
    author: 'Ben Henderson',
    description:
      ' It was my first Hackathon, and I had a really great time - if you\'ve never done one before, this is a great choice. Really good environment for people who want to learn something new, meet new people, and/or challenge themselves. It\'s basically what you make of it, and there was plenty of support available if you have no idea what you\'re doing.',
    index: 'mercury'
  },
   {
     img: AlbertZhang,
     author: 'Albert Zhang',
     description:
       'This was my second hackathon ever and it was a lot of fun! The mentors were super helpful, and I was able to play around with Tensorflow, which is something I\'ve never done before.'
   },
   {
     img: OnotinaImoudu,
     author: 'Onotina Imoudu',
     description:
       'This was my first hackathon and I am definitely attending next year!!! Hackbeanpot is a must attend for anyone who has a passion or wants to get their feet wet in design or coding. And we had a zoom-ba session!! A zumba class on zoom, it was really fun, I was sweaty and out of breath.'
   },
   {
     img: Anonymous,
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

  const [selected, updateSelected] = useState(testimonialInfo[0].index);

  return (
    <div id="testimonials" className="testimonials__container">
          <h2 className="testimonials__title">Testimonials</h2>
      <div className="testimonials__box">
      <TestimonialsItem
      key={selected.author}
      img={selected.img}
      author={selected.author}
      description={selected.description}
    />
        </div>
      <div className="planet_selection_container">
        {console.log(selected.index)}
        {selected === 'mercury' ? 
        <TestimonialsMercuryDim className="testimonials__planet"/>
        : <TestimonialsMercuryBright className="testimonials__planet" />}
        <TestimonialsVenusDim className="testimonials__planet"/>
        <TestimonialsNeptuneDim className="testimonials__planet"/>
        <TestimonialsMarsDim className="testimonials__planet"/>
      </div>
    </div>
  );
};

export default Testimonials;
