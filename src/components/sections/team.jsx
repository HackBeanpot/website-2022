import React from 'react';
import SecondaryCta from '../secondary-cta';
import TeamPicture from '../../images/team-picture.jpeg'
const team = () => (
    <div className="team__container container">
        <div className="team__content-wrapper">
            <div className="team__content">
                <a className="theme__header">OUR TEAM</a>
                <h2 className="team__space-jam">
                    Meet this years mission crew behind HackBeanpot!
                </h2>
                <p className="team__description">
                    The HackBeanpot Core Team has been hard at work bringing HackBeanpot 2022 to a galaxy near you! We are a group of 22 driven students from universities in the Boston area who aim to make technical experience and knowledge accessible to anyone who’s interested.
                </p>
                <SecondaryCta link="mailto:team@hackbeanpot.com" textDescription="Contact us" />

            </div>
            <img className='team__picture' src={TeamPicture} />
        </div>
    </div>
);

export default team;