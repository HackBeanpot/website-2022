import React, { useState } from 'react';
import SecondaryCta from '../secondary-cta';
import { StaticImage } from 'gatsby-plugin-image';

const TeamPicture = <StaticImage src='../../images/team-2022/team-picture.jpeg' alt='picture of the HackBeanpot Core team' className="team__picture"/>;
const CariPicture = <StaticImage src='../../images/team-2022/Cari.jpeg' alt='picture of Cari' width={300} height={300} className="team__member-picture" transformOptions={{fit: "cover", cropFocus: "centre"}} />;
const SamaPicture = <StaticImage src='../../images/team-2022/Sama.jpeg' alt='picture of Sama' width={300} height={300} className="team__member-picture" transformOptions={{fit: "cover", cropFocus: "centre"}} />;
const ShinePicture = <StaticImage src='../../images/team-2022/Shine.jpeg' alt='picture of Shine' width={300} height={300} className="team__member-picture" transformOptions={{fit: "cover", cropFocus: "centre"}} />;
const JaimePicture = <StaticImage src='../../images/team-2022/Jaime.jpeg' alt='picture of Jaime' width={300} height={300} className="team__member-picture" transformOptions={{fit: "cover", cropFocus: "centre"}} />;
const ShaniaPicture = <StaticImage src='../../images/team-2022/Shania.jpeg' alt='picture of Shania' width={300} height={300} className="team__member-picture" transformOptions={{fit: "cover", cropFocus: "centre"}} />;
const OnotinaPicture = <StaticImage src='../../images/team-2022/Onotina.jpeg' alt='picture of Onotina' width={300} height={300} className="team__member-picture" transformOptions={{fit: "cover", cropFocus: "centre"}} />;
const SpencerPicture = <StaticImage src='../../images/team-2022/Spencer.jpeg' alt='picture of Spencer' width={300} height={300} className="team__member-picture" transformOptions={{fit: "cover", cropFocus: "centre"}} />;
const AlexPicture = <StaticImage src='../../images/team-2022/Alex.jpeg' alt='picture of Alex' width={300} height={300} className="team__member-picture" transformOptions={{fit: "cover", cropFocus: "centre"}} />;
const JudyPicture = <StaticImage src='../../images/team-2022/Judy.jpeg' alt='picture of Judy' width={300} height={300} className="team__member-picture" transformOptions={{fit: "cover", cropFocus: "centre"}} />;
const DanielPicture = <StaticImage src='../../images/team-2022/Daniel.jpeg' alt='picture of Daniel' width={300} height={300} className="team__member-picture" transformOptions={{fit: "cover", cropFocus: "centre"}} />;
const JessPicture = <StaticImage src='../../images/team-2022/Jess.jpeg' alt='picture of Jess' width={300} height={300} className="team__member-picture" transformOptions={{fit: "cover", cropFocus: "centre"}} />;
const JamiePicture = <StaticImage src='../../images/team-2022/Jamie L.jpeg' alt='picture of Jamie' width={300} height={300} className="team__member-picture" transformOptions={{fit: "cover", cropFocus: "centre"}} />;
const KarenPicture = <StaticImage src='../../images/team-2022/Karen.jpeg' alt='picture of Karen' width={300} height={300} className="team__member-picture" transformOptions={{fit: "cover", cropFocus: "centre"}} />;
const GauriPicture = <StaticImage src='../../images/team-2022/Gauri.jpeg' alt='picture of Gauri' width={300} height={300} className="team__member-picture" transformOptions={{fit: "cover", cropFocus: "centre"}} />;
const DavidPicture = <StaticImage src='../../images/team-2022/David.jpeg' alt='picture of David' width={300} height={300} className="team__member-picture" transformOptions={{fit: "cover", cropFocus: "centre"}} />;
const BaydenPicture = <StaticImage src='../../images/team-2022/Bayden.jpeg' alt='picture of Bayden' width={300} height={300} className="team__member-picture" transformOptions={{fit: "cover", cropFocus: "centre"}} />;
const AnikaPicture = <StaticImage src='../../images/team-2022/Anika.jpeg' alt='picture of Anika' width={300} height={300} className="team__member-picture" transformOptions={{fit: "cover", cropFocus: "centre"}} />;
const CindyPicture = <StaticImage src='../../images/team-2022/Cindy.jpeg' alt='picture of Cindy' width={300} height={300} className="team__member-picture" transformOptions={{fit: "cover", cropFocus: "centre"}} />;
const KiminPicture = <StaticImage src='../../images/team-2022/Kimin.jpeg' alt='picture of Kimin' width={300} height={300} className="team__member-picture" transformOptions={{fit: "cover", cropFocus: "centre"}} />;
const LeviPicture = <StaticImage src='../../images/team-2022/Levi.jpeg' alt='picture of Levi' width={300} height={300} className="team__member-picture" transformOptions={{fit: "cover", cropFocus: "centre"}} />;
const SreyaPicture = <StaticImage src='../../images/team-2022/Sreya.jpeg' alt='picture of Sreya' width={300} height={300} className="team__member-picture" transformOptions={{fit: "cover", cropFocus: "centre"}} />;
const DaniaPicture = <StaticImage src='../../images/team-2022/Dania.jpeg' alt='picture of Dania' width={300} height={300} className="team__member-picture" transformOptions={{fit: "cover", cropFocus: "centre"}} />;


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
      { name: 'Karen Li', picture: KarenPicture, description: '' },
      { name: 'Dania Alnahdi', picture: DaniaPicture, description: '' }
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
    <div className='team__container'>
      <div className='team__content-wrapper'>
        <div className='team__content'>
          <a className='theme__header'>OUR TEAM</a>
          <h2 className='team__space-jam'>
            Meet this years captains behind HackBeanpot!
          </h2>
          <p className='team__description'>
            The HackBeanpot Core Team has been hard at work bringing HackBeanpot
            2022 to a galaxy near you! We are a group of 22 driven students from
            universities in the Boston area who aim to make technical experience
            and knowledge accessible to anyone who’s interested.
          </p>
        </div>
        {TeamPicture}
      </div>
      <div className='team__small-teams'>
        <div className='team__small-teams-buttons'>
          <SmallTeamButtons setSmallTeamClicked={setSmallTeamClicked} />
        </div>
        <div className='team__small-team-clicked'>
          <SmallTeam smallTeam={smallTeamClicked} />
        </div>
      </div>
    </div>
  );
};

// Render clickable buttons to render each small team
const SmallTeamButtons = ({ setSmallTeamClicked }) => {
  return smallTeamInfo.map(smallTeam => (
    <div className='team__small-teams-single-button' onClick={() => setSmallTeamClicked(smallTeam)}>
      <div style={{ cursor: 'pointer' }}>
        <SecondaryCta textDescription={smallTeam.teamName} />
      </div>
    </div>
  ));
};

// Renders current team clicked (if no team has been clicked leadership is shown by default)
const SmallTeam = ({ smallTeam }) => {
  return smallTeam.teamMembers.map(teamMember => <TeamMember teamMember={teamMember} />);
};

// Renders each individual team meber of the current team clicked (if no team has been clicked leadership is shown by default)
const TeamMember = ({ teamMember }) => {
  return (
    <div className='team__team-member-container'>
      {teamMember.picture}
      <div>{teamMember.name}</div>
      <div style={{ fontSize: '18px' }}>{teamMember.description}</div>
    </div>
  );
};

export default Team;
