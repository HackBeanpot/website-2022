import React, { useState } from 'react';
import SecondaryCta from '../secondary-cta';
import TeamPicture from '../../images/team-picture.jpeg'
const Team = () => {
    const [smallTeamClicked, setSmallTeamClicked] = useState('Leadership')
    const allSmallTeams = ['Leadership', 'Design', 'Tech', 'Social/Outreach', 'Sponsorship']
    return (
        // <div className="container">
        <div className="team__container">
            <div className="team__content-wrapper">
                <div className="team__content">
                    <a className="theme__header">OUR TEAM</a>
                    <h2 className="team__space-jam">
                        Meet this years mission crew behind HackBeanpot!
                    </h2>
                    <p className="team__description">
                        The HackBeanpot Core Team has been hard at work bringing HackBeanpot 2022 to a galaxy near you! We are a group of 22 driven students from universities in the Boston area who aim to make technical experience and knowledge accessible to anyone who’s interested.
                    </p>
                    {/* <SecondaryCta textDescription="Leadership" /> */}
                </div>
                <img className='team__picture' src={TeamPicture} />
            </div>
            <div className="team__small-teams">
                <div className="team__small-teams-buttons">
                    {SmallTeams(smallTeamClicked)}
                </div>
            </div>
        </div>
        // </div>
    );
}

const SmallTeams = (smallTeamClicked) => {
    const allSmallTeams = ['Leadership', 'Design', 'Tech', 'Social/Outreach', 'Sponsorship']
    return (
        allSmallTeams.map(smallTeam =>
            <SecondaryCta textDescription={smallTeam} />
        ));

    // TODO: wrap SecondaryCta in a div that has onClick={() => set(smallTeamClicked) OR call function to refresh small teams directly
}

export default Team;