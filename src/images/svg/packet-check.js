import React from 'react'

const PacketCheck = ({ shadowColor, className }) => (
  <svg className={className} width="23" height="22" viewBox="0 0 23 22" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M21.3004 6.08107C21.852 5.4307 21.852 4.47668 21.3004 3.82631C20.6045 3.00586 19.3388 3.00557 18.6426 3.82569L9.71373 14.3429C8.67639 15.5647 6.79105 15.5654 5.7528 14.3443L4.33762 12.6799C3.64087 11.8605 2.37555 11.8612 1.67979 12.6815C1.12799 13.3321 1.12799 14.2864 1.67979 14.937L3.65675 17.2678C5.79223 19.7856 9.6766 19.7856 11.8121 17.2678L21.3004 6.08107Z" fill={shadowColor} stroke={shadowColor}/>
    <path d="M1.55723 13.0197L1.95092 12.7115L1.55723 13.0197L3.21477 15.1368C5.26438 17.7546 9.22667 17.7546 11.2763 15.1368L19.8674 4.164C20.3449 3.55404 20.3449 2.69701 19.8674 2.08704C19.1931 1.22587 17.8898 1.22557 17.2151 2.08643L9.03075 12.5298C8.12224 13.6891 6.36741 13.6898 5.45805 12.5311L4.20961 10.9405C3.53442 10.0802 2.23139 10.081 1.55723 10.9421C1.0795 11.5522 1.0795 12.4095 1.55723 13.0197Z" fill="white" stroke="white"/>
  </svg>
)

export default PacketCheck
