import React from 'react';
import BlastoffNeptune from '../../images/svg-2022/blastoff-neptune';
import BlastoffAstronaut from '../../images/svg-2022/blastoff-astronaut';

const ThemeAnnouncement = () => (
  <section className="theme-announcement">
    <div className="container">
      <div className="theme__content-wrapper">
        <div className="theme__content">
          <a className="theme__header">Blast off!</a>
          <h2 className="theme__space-jam">
            Explore the stars with us at <br /> our 10th annual event!
          </h2>
          <p className="theme__description">
            HackBeanpot 2022 is gonna be out of this world! Join our community
            of astronaut trainees* for a weekend of exploration, collaboration,
            and fun! (Oh, and did we mention free food and swag?)
          </p>
          <p className="theme__description">
            Hackers can expect to put their resourcefulness to the test, while
            sharing stories, and learning new skills from peers. So whether
            you're a seasoned hackathon-goer, an
            ‘I-have-never-written-a-line-of-code’ beginner, or someone
            in-between, we’re excited for you to embark on this adventure with
            us!
          </p>
          <p className="theme__disclaimer">
          *no actual astronaut training or experience necessary 
          </p>
          <a
        href="https://hackbeanpot.us10.list-manage.com/subscribe?u=a98050d47fdae2481521f0474&id=dccd8c8431"
        role="button"
        className="header__cta"
        target="_blank"
        rel="noopener noreferrer"
      >
        Join our mailing list
      </a>
        </div>
      </div>
    </div>
    <div className="blastoff-neptune">
        <BlastoffNeptune />
      </div>
      <div className="blastoff-astronaut">
        <BlastoffAstronaut />
      </div>
  </section>
);

export default ThemeAnnouncement;
