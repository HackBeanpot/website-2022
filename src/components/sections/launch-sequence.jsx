import React from 'react';
import Countdown from 'react-countdown';
import PrimaryCta from '../primary-cta';

const hbpStartDate = new Date('12/31/2021, 23:59:59').getTime();
let today = new Date();
today = Date.now();
const diff = hbpStartDate - today;

const time = ({days, hours, minutes, seconds}) => {

  return <span> {days} : {hours.toString().padStart(2, 0)} : {minutes.toString().padStart(2, 0)} : {seconds.toString().padStart(2, 0)} </span>;
}
const LaunchSequence = () => (
  <div className="container ">
    <div id="launch-sequence" className="launch__sequence">
      <div className="launch__content">
        <a className="launch__header">2022 Applications Close In</a>
        <h1 className="launch__countdown">
          <Countdown date={Date.now() + diff} 
          renderer = {time}
          />
          </h1>        
        <ul className="launch__labels">
            <li className= "launch_time">days</li>
            <li className= "launch_time">hours</li>
            <li className= "launch_time">minutes</li>
            <li className= "launch_time">seconds</li>
        </ul>
        <div className="launch__cta-container">
          <PrimaryCta
            textDescription="Share with your friends"/>
      </div>
    </div>
  </div>
</div>
);

export default LaunchSequence;