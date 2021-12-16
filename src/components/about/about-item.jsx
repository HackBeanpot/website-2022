import React, { useState } from 'react';

const AboutItem = ({ img, title, description }) => {
  const [hover, setHover] = useState(false);
  return (
    <>
      <div className="about-item-container">
        <img
          className={
            hover ? 'about-item-img img-hover' : 'about-item-img img-normal'
          }
          src={img}
          onMouseOver={() => setHover(true)}
          onMouseOut={() => setHover(false)}
        />
        <div className="about-item-text-container">
          <h2 className="about-item-title">{title}</h2>
          <p>{description}</p>
        </div>
      </div>
    </>
  );
};

export default AboutItem;
