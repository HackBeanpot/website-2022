import React, { useState } from 'react';
import SecondaryCta from '../secondary-cta';
import TeamPicture from '../../images/team-2022/team-picture.jpeg'
import CariPicture from '../../images/team-2022/Cari.jpeg'
import SamaPicture from '../../images/team-2022/Sama.jpeg'


const smallTeamInfo = [
    {
        teamName: "Leadership",
        teamMembers: [{name: "Cari Liu", picture: CariPicture, description: "President" } ]
    },
    {
        teamName: "Design",
        teamMembers: []
    },
    {
        teamName: "Tech",
        teamMembers: []
    },
    {
        teamName: "Social/Outreach",
        teamMembers: []
    },
    {
        teamName: "Sponsorship",
        teamMembers: []
    }
]


const Team = () => {
    const [smallTeamClicked, setSmallTeamClicked] = useState({
        teamName: "Leadership",
        teamPictures: [<img className='team__team-member-portrait' src={'../../images/team-2022/Cari.JPG'} />]
    })
    return (
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
                </div>
                <img className='team__picture' src={TeamPicture} />
            </div>
            <div className="team__small-teams">
                <div className="team__small-teams-buttons">
                    {RenderSmallTeamButtons(setSmallTeamClicked)}
                </div>
                <div className="team__small-team-clicked">
                    {RenderTeamClicked(smallTeamClicked)}
                </div>
            </div>
        </div>
        // </div>
    );
}

const RenderSmallTeamButtons = (setSmallTeamClicked) => {
    return (
        smallTeamInfo.map(smallTeam =>
            <div onClick={() => setSmallTeamClicked(smallTeam)}>
                <SecondaryCta textDescription={smallTeam.teamName} />
            </div>
        )
    );

}

// TODO: change RenderTeamClicked to render images of team
const RenderTeamClicked = (smallTeam) => {
    return (
        //className='team__team-member-portrait'
        // <img className='team__picture' src={TeamPicture} />
        <img className='team__team-member-portrait' src={CariPicture} />
    );
    // return (
    //     smallTeam.teamPictures.map(picture => <div>
    //         picture
    //     </div>)
    // );
}

const RenderIndividaulTeamMember = (memberPicture, memberName, memberDescription) => {
    return (
        <div>
            <img className='team__team-member-portrait' src={memberPicture} />
            <div>{memberName}</div>
            <div>{memberDescription}</div>
        </div>
    );
}

export default Team;