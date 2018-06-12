import React from 'react';
import Sunset from './../images/sunset.svg';
import Cross from './../images/cross.svg';
import Event from './Event';

function InfoBox(props) {
  function closeInfoBox(){
    props.getDivStyle();
  }
  return (
    <div className={`infoBox ${props.className}`}>
      <div className="infoHeader">
        <h2>{ props.passData }</h2>
        <button onClick={ closeInfoBox } className="close">
          <img src={ Cross } alt="Close"/>
        </button>
      </div>
      <div className="info">
        <div className="left">
            <ul className="features">
              <li className="true">Bad</li>
              <li className="true">Grillning</li>
              <li className="true">Handikappanpassat</li>
              <li className="false">Alkohol</li>
              <li className="true">Aktiviteter: minigolf</li>
            </ul>
            <div className="sunset">
              <img src={ Sunset } alt="Solen går ner"/>
              <small>Solen går ner</small>
              <p>23:30</p>
            </div>
        </div>
        <div className="right">
          <div className="events">
            <ul>
              <Event />
              <Event />
              <Event />
              <button className="show-more">Visa mer...</button>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InfoBox;
