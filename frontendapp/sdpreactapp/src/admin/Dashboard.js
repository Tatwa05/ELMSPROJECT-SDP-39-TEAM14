import React from 'react';
import adminhome from './images/adminhome.png';

export default function Dashboard() {
  const imageContainer = {
    maxWidth: '200%',
    height: '590px',
    marginLeft: '4vw',
    marginTop: '2vh',
    marginBottom: '19vh',
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <p>
        <span style={{ fontSize: '28px' }}>
          <b>Pending Approvals : </b>
        </span>
        <span style={{ fontSize: '44px', color: 'red' }}>
          <b>10</b>
        </span>
      </p>
      <img src={adminhome} alt='adminhome' style={imageContainer} />
    </div>
  );
}
