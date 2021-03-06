import PacketStruct from '../../../data/packet-structure.json';
import PackageComponent from './package-component';
import React from 'react';

const PackageRow = ({ trail, build, engage, network, removeOptionChecked, setTrail, isMobile }) => {
  const TRAILS_LIST = ["build", "engage", "network"];

  const row_trail = trail !== undefined ? trail : 'build';
  const selectedLevel = trail === "build" ? build : trail === "engage" ? engage : network;
  const trailPerks = PacketStruct["trails"][trail] !== undefined ? PacketStruct["trails"][trail] : [];


  const row = []
  trailPerks.forEach((level, index) => {
    row.push(<PackageComponent className={`row-${trail}-${level}`} trail={trail} level={index + 1} key={`${trail}-${level}`}
                               isMobile={isMobile} perks={level} setTrail={(level, trailType) => setTrail(level, trailType)}
                               selected={selectedLevel === index + 1} removeOptionChecked={(trail) => removeOptionChecked(trail)}/>)
  })

  if (!isMobile) {
    return (
      <div className={`${trail}-div-pack packet-tier`}>
        <div className='trail-intro'>
          <div className={`packet-headline ${trail}-headline`}>
            <div className={`${trail}-circle`}>{TRAILS_LIST.findIndex((elem) => elem===trail) + 1}</div>
            {`Select your ${row_trail.charAt(0).toUpperCase() + row_trail.slice(1)} Package`}
          </div>
          <button className={`${trail}-opt-out-button`} onClick={() => removeOptionChecked(trail)}>
            Clear selection
          </button>
        </div>
        <div className={`${trail}-row`}> { row } </div>
      </div>
    )
  } else {
    return (
      <div className={`${trail}-div-pack packet-tier`}>
        <div className={`packet-headline ${trail}-headline`}>
          {`${row_trail.charAt(0).toUpperCase() + row_trail.slice(1)} Package`}
          <div className={`packet-description ${trail}-description`}>{PacketStruct["descriptions"][trail]}</div>
        </div>
        <div className={`${trail}-row`}> { row } </div>
      </div>
    )
  }
}

export default PackageRow
