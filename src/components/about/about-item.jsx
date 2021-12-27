import React from 'react';

const AboutItem = ({ img, title, description }) => {
  return (
    <>
      <div className="about-item-container">
        {img}
        <div className="about-item-text-container">
          <h2 className="about-item-title">{title}</h2>
          <p>{description}</p>
        </div>
      </div>
    </>
  );
};

export default AboutItem;
