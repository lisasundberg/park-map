import React from 'react';
import Sunset from './../images/sunset.svg';
import Sunny from './../images/sunny.svg';

function Weather(){
return (
  <div className="weatherContainer flex row vCenter spaceBetween">
    <div className="weather">
      <div><img src={ Sunny } alt="Sunny" className="sunny" /></div>
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
