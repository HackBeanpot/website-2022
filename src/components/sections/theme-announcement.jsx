import React from 'react';
import BlastoffNeptune from '../../images/svg-2022/blastoff-neptune';
import BlastoffAstronaut from '../../images/svg-2022/blastoff-astronaut';
import PrimaryCta from '../primary-cta';

const ThemeAnnouncement = () => (
  <section className="theme-announcement">
    <div className="container">
      <div className="theme__content-wrapper">
        <div className="theme__content">
          <div className="theme__header">Blast off!</div>
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
          <div className="theme__cta-container">
          <PrimaryCta
            link="https://hackbeanpot.us10.list-manage.com/subscribe?u=a98050d47fdae2481521f0474&id=dccd8c8431"
            textDescription="Join our mailing list"
          />
          </div>

        </div>
      </div>
    </div>
    <BlastoffNeptune />
    <BlastoffAstronaut />
  </section>
);

export default ThemeAnnouncement;
