import React from 'react';

import KitContent from 'data/sponsor-kit-content.json';
import EngagementIcon from 'images/svg/engagement-icon';
import InnovationIcon from 'images/svg/innovation-icon';
import RecruitmentIcon from 'images/svg/recruitment-icon';

const Kit = props => {
  let icon;
  if (props.content.title === 'Engagement') {
    icon = <EngagementIcon />;
  } else if (props.content.title === 'Innovation') {
    icon = <InnovationIcon />;
  } else if (props.content.title === 'Recruitment') {
    icon = <RecruitmentIcon />;
  }

  return (
    <div className="sponsor-kit">
      <div className="sponsor-kit__icon">{icon}</div>
      <div className="sponsor-kit__title">{props.content.title}</div>
      <div className="sponsor-kit__description">
        {props.content.description}
      </div>
    </div>
  );
};

// const SponsorKitsMobile = () => {
//   if (typeof window !== 'undefined') {
//     return (
//       <Flickity className={'sponsor-kits-carousel'} options={flickityOptions}>
//         {KitContent.map((content, index) => (
//           <Kit key={`sponsor-kit-${index}`} content={content} />
//         ))}
//       </Flickity>
//     );
//   } else {
//     return null;
//   }
// };

const SponsorKits = () => {
  return (
    <div className="sponsor-kits">
      {KitContent.map((content, index) => (
        <Kit key={`sponsor-kit-${index}`} content={content} />
      ))}
    </div>
  );
};

export default SponsorKits;
