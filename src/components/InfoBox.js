import React, {Component}  from 'react';
import Cross from './../images/cross-dark-large.svg';
import Share from './../images/share.svg';
import Weather from './Weather';
import Events from './Events';
import StarEmpty from './../images/star-empty.svg';
import StarFilled from './../images/star-filled.svg';
import InstagramFeed from './InstagramFeed';

class InfoBox extends Component {
  closeInfoBox = () => {
    this.props.getDivStyle();
  }

  render(){
    const infoBox = this.refs;

    return (
      <div className={`infoBox ${this.props.className}`} ref={ infoBox => this.infoBox = infoBox }>
        <div className="infoHeader">
          <div className="flex vCenter">
            <h2>{ this.props.passData }</h2>
            <div className="share flex vCenter hCenter">
              <p>Dela</p>
              <img src={ Share } alt="Share" />
            </div>
          </div>
          <button onClick={ this.closeInfoBox } className="close">
            <img src={ Cross } alt="Close"/>
          </button>
          </div>
          <div className="rating">
            <img src={StarFilled} alt="Filled star"/>
            <img src={StarFilled} alt="Filled star"/>
            <img src={StarFilled} alt="Filled star"/>
            <img src={StarFilled} alt="Filled star"/>
            <img src={StarEmpty} alt="Star"/>
          </div>
        <div className="info">
          <div className="left">
            <h3>Vad finns i { this.props.passData }?</h3>
            <div className="flex row">
              <ul className="features">
                <li className="true">Bad</li>
                <li className="true">Grillning</li>
                <li className="true">Toaletter</li>
                <li className="true">Handikappanpassat</li>
                <li className="true">Utegym</li>
              </ul>
              <ul className="features">
                <li className="false">Alkoholtillstånd</li>
                <li className="false">Utsikt</li>
                <li className="false">Boule</li>
                <li className="false">Minigolf</li>
              </ul>
            </div>
            <hr className="mobile" />
            <Weather />
          </div>
          <hr className="mobile" />
          <div className="right">
            <Events />
          </div>
        </div>
        <hr />
        <InstagramFeed />
        <div className="updated">
          <small>Senast uppdaterad 2018-06-18</small>
        </div>
      </div>
    );
  }
}

export default InfoBox;
