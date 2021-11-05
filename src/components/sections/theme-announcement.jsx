import React from 'react';

import BlueTransition from 'images/svg/blue-transition.jsx';

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
        </div>
      </div>
    </div>
  </section>
);

export default ThemeAnnouncement;
