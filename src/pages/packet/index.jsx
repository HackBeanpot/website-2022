import React from 'react';
import CloudBackground from '../../images/svg/packet-cloud.svg'
import PacketStruct from './packet-structure.json'
import PackageComponent from './components/package-component'

export default () => (
  <SponsorPacket />
)

const SponsorPacket = () => {
    return (
      <div className="packet">
        <section className="packet-cover">
          <div className='title'>
            <h1>
              Sponsor
            </h1>
            <h1>
              HBP 2021
            </h1>
            <img className="cloud-background" src={CloudBackground} alt=""/>
            <p className="cloud-text">
              At HackBeanpot, we aim to foster an inclusive community <br/> that
              welcomes students of any skill level to work together <br/> on
              engaging technical projects. By bringing local <br/>companies,
              organizers, and attendees together, <br/> HackBeanpot celebrates
              innovation and inclusion in Boston tech.
            </p>
          </div>
        </section>
        <section className='packet-struct'>
          {Object.keys(PacketStruct).map(trail => {
            const row = []
            {PacketStruct[trail].forEach((level, index) => {
              row.push(<PackageComponent trail={trail} level={index + 1} perks={level}/>)
            })}

            return (
              <div className={`${trail}-row`}> { row } </div>
            )
          })}
        </section>
      </div>
    );
}
