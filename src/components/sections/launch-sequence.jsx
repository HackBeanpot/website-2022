import React from 'react';
import Countdown from 'react-countdown';
import SecondaryCta from '../secondary-cta';

const hbpStartDate = new Date('2/8/2022, 19:00:00 ').getTime();
let today = new Date();
today = Date.now();
const diff = hbpStartDate - today;

const time = ({days, hours, minutes}) => {
  var minutePadding = "";
  var hourPadding = ""
  if (minutes < 10) {
    minutePadding = 0;
  }
  if(hours < 10) {
    hourPadding = 0;
  }
  return <span>{days} : {hourPadding}{hours} : {minutePadding}{minutes} </span>;
}
const LaunchSequence = () => (
  <div className="container ">
    <div id="launch-sequence" className="launch__sequence">
      <div className="launch__content">
        <a className="launch__header">Launch Sequence Initating In</a>
        <h1 className="launch__countdown">
          <Countdown date={Date.now() + diff} 
          renderer = {time}
          />
          </h1>        
        <ul className="launch__labels">
            <li>days</li>     <li>hours</li>     <li>minutes</li>
        </ul>
        <div className="launch__cta-container">
          <SecondaryCta
            textDescription="Share with your friends"
          />
      </div>
    </div>
  </div>
</div>
);

export default LaunchSequence;