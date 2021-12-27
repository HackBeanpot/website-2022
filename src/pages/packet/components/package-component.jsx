import React from 'react'
import PacketCheck from '../../../images/svg/packet-check.js'
import PriceLabelLevel1 from '../../../images/svg/price-label-level-1.svg';
import PriceLabelLevel2 from '../../../images/svg/price-label-level-2.svg';
import PriceLabelLevel3 from '../../../images/svg/price-label-level-3.svg';

const checkColors = {
  "build": "#E56138",
  "engage": "#CCAD0D",
  "network": "#52C2C2"
}

const getPriceLabelForLevel = (level) => {
  switch(level) {
    case 1: return PriceLabelLevel1;
    case 2: return PriceLabelLevel2;
    case 3: return PriceLabelLevel3;
    default: throw new Error('unexpected price label level: ' + level);
  }
}

const PackageComponent = ({ perks, level, trail, setTrail, selected, isMobile, removeOptionChecked }) => {
  const comp_perks = perks !== undefined ? perks : [];
  const comp_level = level !== undefined ? level : 1;

  return (
    <label htmlFor={`${trail}-${level}-button`}
           className={`packet-box package-component-${trail} packet-level-${level} ${selected ? 'packet-box-selected' : ''}`}>
      {!isMobile ?
        <img className={`packet-price-label`} src={getPriceLabelForLevel(comp_level)}
             alt='price-label' height="67" width="176"/>
        : <div className={'packet-price-mobile'}>${375 * level}</div>}
      {!isMobile && <input type="radio" className={`packet-radio`}
                           id={`${trail}-${level}-button`}
                           onChange={() => setTrail(level, trail)} checked={selected}/>}
      {
        !isMobile && (selected ?
          <div className="packet-box-radio-checked">
            <PacketCheck className="packet-box-check" shadowColor={checkColors[trail]}/>
          </div> :
          <div className="packet-box-radio-unchecked"/>)
      }
      <ul className={`list-${trail}-${level}`}>
        {comp_perks.map((perk, index) => {
          return (
            <li key={`${trail}-${level}-list-${index}`}> {perk} </li>
          )
        })}
      </ul>
      { isMobile && (selected ?
        <button className={`packet-box-radio-mobile-checked-${trail}`} id={`${trail}-${level}-button`}
             onClick={() => removeOptionChecked(trail)}>Selected</button> :
        <button className={`packet-box-radio-mobile-unchecked-${trail}`} id={`${trail}-${level}-button`}
             onClick={() => setTrail(level, trail)}>Select</button>)
      }
    </label>
  )
}

export default PackageComponent
