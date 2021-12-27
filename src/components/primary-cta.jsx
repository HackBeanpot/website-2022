import React, {useState} from 'react';
import CtaRocketship from '../images/svg-2022/cta-rocketship.svg';

const PrimaryCta = ({ link, textDescription }) => {
    const [isClicked, setIsClicked] = useState(false);
    if (link == null) {
        const ctaText = isClicked ? "Copied to clipboard!" : textDescription;
        const onClick = async e => {
        setIsClicked(true);
        // second argument is in milliseconds, so 3 * 1000 = 3 seconds
        // after 3 seconds, setTimeout will call the function you provide
        setTimeout(() => setIsClicked(false), 3 * 1000);
        e.preventDefault();

        const el = document.createElement('input');
        el.value = window.location.href;
        document.body.appendChild(el);
        el.select();
        document.execCommand('copy');
        document.body.removeChild(el);

        }

        return (
            <div>
                <button onClick={onClick} 
                    className = "launch-button"
                >
                    {ctaText} <img className="cta-rocketship" src={CtaRocketship} alt="a small rocketship" />
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
        {textDescription} <img className="cta-rocketship" src={CtaRocketship} alt="a small rocketship" />
    </a>
    }
};

export default PrimaryCta;