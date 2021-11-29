import React, {useState} from 'react';
import CtaRocketship from '../images/svg-2022/cta-rocketship';


const SecondaryCta = ({textDescription}) => {
    const [message, setMessage] = useState('');

    const clicked = async e => {
        e.preventDefault();
        setMessage('Copied the HBP website to clipboard!');
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
            <p className="launch-copy">{message}</p>
        </div>
    )
    
    
};

export default SecondaryCta;
