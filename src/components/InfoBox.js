import React from 'react';

function InfoBox(props) {
  function closeInfoBox(){
    props.getDivStyle();
  }
  return (
    <div className={`infoBox ${props.className}`}>
      <div>
        <h2>{ props.passData }</h2>
      </div>
      <div>
        <button onClick={ closeInfoBox } className="close">
          <i className="fas fa-window-close"></i>
        </button>
      </div>
    </div>
  );
}

export default InfoBox;
