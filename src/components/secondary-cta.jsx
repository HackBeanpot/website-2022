import React, {useState} from 'react';
import CtaRocketship from '../images/svg-2022/cta-rocketship';


const SecondaryCta = ({textDescription}) => {
    const [message, setMessage] = useState('');
    const [link, setLink] = useState('');

    const clicked = async e => {
        e.preventDefault();
        setMessage('Copied the HBP website to clipboard!');
        setLink(link);
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
