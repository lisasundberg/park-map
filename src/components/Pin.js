import React from 'react';

const Pin = (props) =>
  <div className="pin">
      <i className="fas fa-map-marker"></i>
      <p className="pin-title">{ props.text }</p>
  </div>;

export default Pin;
