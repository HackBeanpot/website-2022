import React from 'react';
import CtaRocketship from '../images/svg-2022/cta-rocketship';

const SecondaryCta = ({ link, textDescription }) => {
    return <a
        href={link}
        role="button"
        className="secondary__cta"
        target="_blank"
        rel="noopener noreferrer"
    >
        {textDescription}
    </a>
};

export default SecondaryCta;