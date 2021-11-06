import React, {useState} from 'react';
import './about-item.scss';

const AboutItem = ({img, title, description}) => {
  return (
    <div className="about-item-container">
        <img className="about-item-img" src={img}/>
        <h2 className="about-item-title">{title}</h2>
        <p>{description}</p>
    </div>
  )
}

export default AboutItem;
