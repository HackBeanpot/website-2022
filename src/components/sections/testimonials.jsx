import React, { useState } from 'react';
import TestimonialsItem from '../testimonials-items/testimonial-item';
import PrimaryCta from '../primary-cta';
import BenHenderson from '../../images/ben-henderson.jpg';
import UranusOrbit from '../../images/svg-2022/testimonials-uranusorbit';
import AlbertZhang from '../../images/albert-zhang.jpg';
import OnotinaImoudu from '../../images/onotina-imoudu.jpg';
import Anonymous from '../../images/anonymous.jpg';
import TestimonialsMarsDim from '../../images/svg-2022/testimonials-mars-dim';
import TestimonialsMarsBright from '../../images/svg-2022/testimonials-mars-bright';
import TestimonialsMercuryDim from '../../images/svg-2022/testimonials-mercury-dim';
import TestimonialsMercuryBright from '../../images/svg-2022/testimonials-mercury-bright';
import TestimonialsNeptuneDim from '../../images/svg-2022/testimonials-neptune-dim';
import TestimonialsNeptuneBright from '../../images/svg-2022/testimonials-neptune-bright';
import TestimonialsVenusDim from '../../images/svg-2022/testimonials-venus-dim';
import TestimonialsVenusBright from '../../images/svg-2022/testimonials-venus-bright';

const TESTIMONIAL_PLANETS = {
  MERCURY: 'MERCURY',
  VENUS: 'VENUS',
  NEPTUNE: 'NEPTUNE',
  MARS: 'MARS'
}

const testimonialInfo = [
  {
    img: BenHenderson,
    author: 'Ben Henderson',
    description:
      " It was my first Hackathon, and I had a really great time - if you've never done one before, this is a great choice. Really good environment for people who want to learn something new, meet new people, and/or challenge themselves. It's basically what you make of it, and there was plenty of support available if you have no idea what you're doing.",
    type: TESTIMONIAL_PLANETS.MERCURY
  },
  {
    img: AlbertZhang,
    author: 'Albert Zhang',
    description:
      "This was my second hackathon ever and it was a lot of fun! The mentors were super helpful, and I was able to play around with Tensorflow, which is something I've never done before.",
    type: TESTIMONIAL_PLANETS.VENUS
  },
  {
    img: OnotinaImoudu,
    author: 'Onotina Imoudu',
    description:
      'This was my first hackathon and I am definitely attending next year!!! Hackbeanpot is a must attend for anyone who has a passion or wants to get their feet wet in design or coding. And we had a zoom-ba session!! A zumba class on zoom, it was really fun, I was sweaty and out of breath.',
    type: TESTIMONIAL_PLANETS.NEPTUNE
  },
  {
    img: Anonymous,
    author: 'Anonymous',
    description:
      'HackBeanpot is an awesome way to get introduced to the world of Hackathons, and everyone here is just excited for you to learn.',
    type: TESTIMONIAL_PLANETS.MARS
  }
];

const Testimonials = () => {

  const [selected, setSelected] = useState(testimonialInfo[0]);

  return (
    <section id="testimonials" className="testimonials__container">
      <h2 className="testimonials__title">Testimonials</h2>
      <div className="testimonials__box">
        <TestimonialsItem item={selected} />
      </div>
      <div className="planet_selection_container">
        {testimonialInfo.map(testimonial =>
          <TestimonialsPlanet testimonial={testimonial} selected={selected.type === testimonial.type} setSelected={setSelected} />)}
      </div>
      <div className="archive__content">
        <p className="archive__description">
          Interested in seeing more about our past events and past hacker projects?
          <br />
          Check out the HackBeanpot Archive!
        </p>
        <PrimaryCta link="https://projects.hackbeanpot.com/" textDescription="Visit archive" />
      </div>
      <UranusOrbit />
    </section>
  );
};

const TestimonialsPlanet = ( props ) => {
  const testimonial = props.testimonial
  const selected = props.selected
  const setSelected = props.setSelected
  if (selected) {
    const TestimonialsPlanetBright = getTestimonialsPlanetBright(testimonial.type)
    return <TestimonialsPlanetBright className="testimonials__planet" />
  }
  else {
    const TestimonialsPlanetDim = getTestimonialsPlanetDim(testimonial.type)
    return <TestimonialsPlanetDim 
    className="testimonials__planet" 
    setSelected={() => setSelected(testimonial)} />
  }
}

const getTestimonialsPlanetBright = ( type ) => {
  switch( type ) {
    case TESTIMONIAL_PLANETS.MARS: return TestimonialsMarsBright
    case TESTIMONIAL_PLANETS.MERCURY: return TestimonialsMercuryBright 
    case TESTIMONIAL_PLANETS.NEPTUNE: return TestimonialsNeptuneBright 
    case TESTIMONIAL_PLANETS.VENUS: return TestimonialsVenusBright 
    default: throw new Error("Unexpected type: " + type)
  }
}

const getTestimonialsPlanetDim = ( type ) => {
  switch( type ) {
    case TESTIMONIAL_PLANETS.MARS: return TestimonialsMarsDim 
    case TESTIMONIAL_PLANETS.MERCURY: return TestimonialsMercuryDim 
    case TESTIMONIAL_PLANETS.NEPTUNE: return TestimonialsNeptuneDim 
    case TESTIMONIAL_PLANETS.VENUS: return TestimonialsVenusDim 
    default: throw new Error("Unexpected type: " + type)
  }
}

export default Testimonials;
