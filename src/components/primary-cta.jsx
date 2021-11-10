import React from 'react';
import CtaRocketship from '../images/svg-2022/cta-rocketship';

const PrimaryCta = ({ link, textDescription }) => {
    return <a
        href={link}
        role="button"
        className="header__cta"
        target="_blank"
        rel="noopener noreferrer"
    >
        {textDescription} <CtaRocketship />
    </a>
};

export default PrimaryCta;