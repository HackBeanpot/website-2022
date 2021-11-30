import React from 'react';

const TestimonialsItem = ({ item }) => {
  return (
    <>
      <div className="testimonials-item-container">
        <img className="testimonials-item-img" src={item.img} />
        <div className="testimonials-item-text-container">
          <p>{item.description}</p>
          <h2 className="testimonials-item-author">{item.author}</h2>
        </div>
      </div>
    </>
  );
};

export default TestimonialsItem;
