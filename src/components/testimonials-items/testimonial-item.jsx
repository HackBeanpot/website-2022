import React from 'react';

const TestimonialsItem = ({ img, description, author, type }) => {
  return (
    <>
      <div className="testimonials-item-container">
        <img className="testimonials-item-img" src={img} />
        <div className="testimonials-item-text-container">
          <p>{description}</p>
          <h2 className="testimonials-item-author">{author}</h2>
        </div>
      </div>
    </>
  );
};

export default TestimonialsItem;
