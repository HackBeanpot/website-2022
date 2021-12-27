import React, { useState } from 'react';
import TestimonialsItem from '../testimonials-items/testimonial-item';
import PrimaryCta from '../primary-cta';
import { StaticImage } from 'gatsby-plugin-image';
import TestimonialsMarsDim from '../../images/svg-2022/testimonials-mars-dim.svg';
import TestimonialsMercuryDim from '../../images/svg-2022/testimonials-mercury-dim.svg';
import TestimonialsNeptuneDim from '../../images/svg-2022/testimonials-neptune-dim.svg';
import TestimonialsVenusDim from '../../images/svg-2022/testimonials-venus-dim.svg';
import TestimonialsMarsBright from '../../images/svg-2022/testimonials-mars-bright.svg';
import TestimonialsMercuryBright from '../../images/svg-2022/testimonials-mercury-bright.svg';
import TestimonialsNeptuneBright from '../../images/svg-2022/testimonials-neptune-bright.svg';
import TestimonialsVenusBright from '../../images/svg-2022/testimonials-venus-bright.svg';
import UranusOrbit from '../../images/svg-2022/testimonials-uranusorbit.svg';

const BenHenderson = <StaticImage className="testimonials-item-img" src='../../images/ben-henderson.jpg' alt='a picture of hackers at HBP 2020' />
const AlbertZhang = <StaticImage className="testimonials-item-img" src='../../images/albert-zhang.jpg' alt='a picture of hackers at HBP 2020' />
const OnotinaImoudu = <StaticImage className="testimonials-item-img" src='../../images/onotina-imoudu.jpg' alt='a picture of hackers at HBP 2020' />
const Anonymous = <StaticImage className="testimonials-item-img" src='../../images/anonymous.jpg' alt='a picture of hackers at HBP 2020' />

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
          <TestimonialsPlanet key={testimonial.type} testimonial={testimonial} selected={selected.type === testimonial.type} setSelected={setSelected} />)}
      </div>
      <div className="archive__content">
        <p className="archive__description">
          Interested in seeing more about our past events and past hacker projects?
          <br />
          Check out the HackBeanpot Archive!
        </p>
        <PrimaryCta link="https://projects.hackbeanpot.com/" textDescription="Visit archive" />
      </div>
      <img className="testimonials-uranus-orbit" src={UranusOrbit} alt='uranus orbit' />
    </section>
  );
};

const TestimonialsPlanet = ({ testimonial, selected, setSelected }) => {
  if (selected) {
    return <div className="testimonials__planet">
      <TestimonialsPlanetBright type={testimonial.type} />
    </div>
  }
  return <button onClick={() => setSelected(testimonial)} className="testimonials__planet--dim">
    <TestimonialsPlanetDim type={testimonial.type} />
  </button>
}

const TestimonialsPlanetBright = ({ type }) => {
  switch( type ) {
    case TESTIMONIAL_PLANETS.MARS: return <img src={TestimonialsMarsBright} alt='mars dim' />
    case TESTIMONIAL_PLANETS.MERCURY: return <img src={TestimonialsMercuryBright} alt='mercury dim' />
    case TESTIMONIAL_PLANETS.NEPTUNE: return <img src={TestimonialsNeptuneBright} alt='neptune dim' />
    case TESTIMONIAL_PLANETS.VENUS: return <img src={TestimonialsVenusBright} alt='venus dim' />
    default: throw new Error("Unexpected type: " + type)
  }
}

const TestimonialsPlanetDim = ({ type }) => {
  switch( type ) {
    case TESTIMONIAL_PLANETS.MARS: return <img src={TestimonialsMarsDim} alt='mars bright' />
    case TESTIMONIAL_PLANETS.MERCURY: return <img src={TestimonialsMercuryDim} alt='mercury bright' />
    case TESTIMONIAL_PLANETS.NEPTUNE: return <img src={TestimonialsNeptuneDim} alt='neptune bright' />
    case TESTIMONIAL_PLANETS.VENUS: return <img src={TestimonialsVenusDim} alt='venus bright' />
    default: throw new Error("Unexpected type: " + type)
  }
}

export default Testimonials;
