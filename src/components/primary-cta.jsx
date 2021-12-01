import React from 'react';
import CtaRocketship from '../images/svg-2022/cta-rocketship';

const PrimaryCta = ({ link, textDescription }) => {
    if (link == null) {
        const clicked = async e => {
            e.preventDefault();
            alert("Copied the HBP website to clipboard, please share with your friends!");
            const el = document.createElement('input');
            el.value = window.location.href;
            document.body.appendChild(el);
            el.select();
            document.execCommand('copy');
            document.body.removeChild(el);
        }
        return (
            <div>
                <button onClick={clicked} 
                    className = "launch-button"
                >
                    {textDescription} <CtaRocketship />
                    </button>
                
            </div>
        )
    }
    else {
        return <a
        href={link}
        role="button"
        className="header__cta"
        target="_blank"
        rel="noopener noreferrer"
    >
        {textDescription} <CtaRocketship />
    </a>
    }
};

export default PrimaryCta;