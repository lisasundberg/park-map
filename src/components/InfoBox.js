import React from 'react';

function InfoBox(props) {
  function closeInfoBox(){
    props.getDivStyle();
  }
  return (
    <div className={`info-box ${props.className}`}>
      <h2>{ props.passData }</h2>
      <button onClick={ closeInfoBox }>Close</button>
    </div>
  );
}

export default InfoBox;
