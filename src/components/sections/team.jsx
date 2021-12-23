import React, { useState } from 'react';
import SecondaryCta from '../secondary-cta';
import TeamPicture from '../../images/team-2022/team-picture.jpeg';
import CariPicture from '../../images/team-2022/Cari.jpeg';
import SamaPicture from '../../images/team-2022/Sama.jpeg';
import ShinePicture from '../../images/team-2022/Shine.jpeg';
import JaimePicture from '../../images/team-2022/Jaime.jpeg';
import ShaniaPicture from '../../images/team-2022/Shania.jpeg';
import OnotinaPicture from '../../images/team-2022/Onotina.jpeg';
import SpencerPicture from '../../images/team-2022/Spencer.jpeg';
import AlexPicture from '../../images/team-2022/Alex.jpeg';
import JudyPicture from '../../images/team-2022/Judy.jpeg';
import DanielPicture from '../../images/team-2022/Daniel.jpeg';
import JessPicture from '../../images/team-2022/Jess.jpeg';
import JamiePicture from '../../images/team-2022/Jamie L.jpeg';
import KarenPicture from '../../images/team-2022/Karen.jpeg';
import GauriPicture from '../../images/team-2022/Gauri.jpeg';
import DavidPicture from '../../images/team-2022/David.jpeg';
import BaydenPicture from '../../images/team-2022/Bayden.jpeg';
import AnikaPicture from '../../images/team-2022/Anika.jpeg';
import CindyPicture from '../../images/team-2022/Cindy.jpeg';
import KiminPicture from '../../images/team-2022/Kimin.jpeg';
import LeviPicture from '../../images/team-2022/Levi.jpeg';
import SreyaPicture from '../../images/team-2022/Sreya.jpeg';

const smallTeamInfo = [
    {
        teamName: 'Leadership',
        teamMembers: [
            { name: 'Cari Liu', picture: CariPicture, description: 'President' },
            {
                name: 'Sama El Tahawy',
                picture: SamaPicture,
                description: 'Vice President'
            }
        ]
    },
    {
        teamName: 'Design',
        teamMembers: [
            { name: 'Shine Kim', picture: ShinePicture, description: 'Team Lead' },
            { name: 'Jaime Gonora', picture: JaimePicture, description: '' },
            { name: 'Shania Ambros', picture: ShaniaPicture, description: '' },
            { name: 'Onotina Imoudu', picture: OnotinaPicture, description: '' },
            { name: 'Spencer Shao', picture: SpencerPicture, description: '' }
        ]
    },
    {
        teamName: 'Tech',
        teamMembers: [
            { name: 'Alex Takayama', picture: AlexPicture, description: 'Team Lead' },
            { name: 'Judy Zhang', picture: JudyPicture, description: '' },
            { name: 'Daniel Wang', picture: DanielPicture, description: '' },
            { name: 'Jamie Lin', picture: JamiePicture, description: '' },
            { name: 'Jess Su', picture: JessPicture, description: '' },
            { name: 'Karen Li', picture: KarenPicture, description: '' }
        ]
    },
    {
        teamName: 'Sponsorship',
        teamMembers: [
            { name: 'Anika Rabenhorst', picture: AnikaPicture, description: 'Team Lead' },
            { name: 'Cindy Luo', picture: CindyPicture, description: '' },
            { name: 'Kimin Lee', picture: KiminPicture, description: '' },
            { name: 'Sreya Katabathuni', picture: SreyaPicture, description: '' },
            { name: 'Levi Kaplan', picture: LeviPicture, description: '' }

        ]
    },
    {
        teamName: 'Social/Outreach',
        teamMembers: [
            { name: 'Gauri Dandi', picture: GauriPicture, description: 'Team Lead' },
            { name: 'David Yan', picture: DavidPicture, description: '' },
            { name: 'Bayden Ibrahim', picture: BaydenPicture, description: '' }
        ]
    }
];

const Team = () => {
    const [smallTeamClicked, setSmallTeamClicked] = useState(smallTeamInfo[0]);
    return (
        <div className="team__container">
            <div className="team__content-wrapper">
                <div className="team__content">
                    <a className="theme__header">OUR TEAM</a>
                    <h2 className="team__space-jam">
                        Meet this years captains behind HackBeanpot!
                    </h2>
                    <p className="team__description">
                        The HackBeanpot Core Team has been hard at work bringing HackBeanpot
                        2022 to a galaxy near you! We are a group of 22 driven students from
                        universities in the Boston area who aim to make technical experience
                        and knowledge accessible to anyone who’s interested.
                    </p>
                </div>
                <img className="team__picture" src={TeamPicture} />
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
};

const RenderSmallTeamButtons = setSmallTeamClicked => {
    return smallTeamInfo.map(smallTeam => (
        <div onClick={() => setSmallTeamClicked(smallTeam)}>
            <SecondaryCta textDescription={smallTeam.teamName} />
        </div>
    ));
};

// TODO: change RenderTeamClicked to render images of team
const RenderTeamClicked = smallTeam => {
    return smallTeam.teamMembers.map(teamMember =>
        RenderIndividaulTeamMember(
            teamMember.picture,
            teamMember.name,
            teamMember.description
        )
    );
};

const RenderIndividaulTeamMember = (
    memberPicture,
    memberName,
    memberDescription
) => {
    return (
        <div className="team__team-member-container">
            <img className="team__team-member-portrait" src={memberPicture} />
            {/* TODO change font size */}
            <div>{memberName}</div>
            <div>{memberDescription}</div>
        </div>
    );
};

export default Team;
