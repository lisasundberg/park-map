import React from 'react';

function InfoBox(props) {
  console.log(props.passData);
  return (
    <div className={`info-box ${props.className}`}>
      <h2>{ props.passData }</h2>
    </div>
  );
}

export default InfoBox;
