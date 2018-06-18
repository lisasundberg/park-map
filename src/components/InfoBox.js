import React, {Component}  from 'react';

import Cross from './../images/cross-dark-large.svg';
import Weather from './Weather';
import Events from './Events';
import InstagramFeed from './InstagramFeed';

class InfoBox extends Component {
  closeInfoBox = () => {
    this.props.getDivStyle();
  }
  render(){
  const infoBox = this.refs;
    console.log(infoBox);
  return (
    <div className={`infoBox ${this.props.className}`} ref={ infoBox => this.infoBox = infoBox }>
      <div className="infoHeader">
        <h2>{ this.props.passData }</h2>
        <button onClick={ this.closeInfoBox } className="close">
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
            <Weather />
        </div>
        <div className="right">
          <Events />
        </div>
      </div>
      <hr />
      <InstagramFeed />
    </div>
  );
}
}

export default InfoBox;
