import React from 'react';
// import Marker from './../images/pin.svg';
function Pin(props) {
  return(
    <div className="pin" onClick={props.onClick }>
        <i id={props.id} className="fas fa-map-marker"></i>
        {/* <img src={ Marker } className="fa-map-marker" id={props.id} alt="Marker"/> */}
        <p className="pin-title">{props.title}</p>
    </div>
    );
  }


export default Pin;
