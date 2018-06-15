import React from 'react';
import Sunset from './../images/sunset.svg';

function Weather(){
return (
  <div className="weatherContainer flex row">
    <div className="weather">
      <p>Sol</p>
      <p>23´c</p>
    </div>
    <div className="sunset">
      <img src={ Sunset } alt="Solen går ner"/>
      <small>Solen går ner</small>
      <p>23:30</p>
    </div>
  </div>
  );
}

export default Weather;
