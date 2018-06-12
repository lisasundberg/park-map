import React from 'react';

function Pin(props) {
  return(
    <div className="pin" onClick={props.onClick }>
        <i id={props.id} className="fas fa-map-marker"></i>
        <p className="pin-title">{props.title }</p>
    </div>
    );
  }


export default Pin;
