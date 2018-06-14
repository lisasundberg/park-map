import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import Pin from './Pin';
import InfoBox from './InfoBox';
import DisplayInfo from './DisplayInfo';

class Map extends Component {
  state = {
    park: '',
    infoBoxClassName: 'hidden'
  }

  static defaultProps = {
    center: {
      lat: 59.31,
      lng: 18.07
    },
    zoom: 12,
    greatPlaces: [
      { id: 'Vitabergsparken',
        lat: 59.31255,
        lng: 18.087676,
        features: {
          swimming: false,
          bbq: true
        }
      },
      { id: 'Tantolunden',
        lat: 59.313137,
        lng: 18.037121,
        features: {
          swimming: true,
          bbq: true
        }
      },
      { id: 'Rålambshovsparken',
        lat: 59.328110,
        lng: 18.025942,
        features: {
          swimming: false,
          bbq: true
        }
      }
    ]
  };

  displayInfo = (event, park) => {
    this.setState({ infoBoxClassName: 'visible' });
    this.setState({
      park: event.target.id
    });
  }

  closeInfoBox = () => {
    this.setState({ infoBoxClassName: '' });
    setTimeout(() => {
      this.setState({ infoBoxClassName: 'hidden' });
    }, 500);
  }

  render() {
    const parks = this.props.greatPlaces
      .map(park => {
        const { id, lat, lng } = park;
        return (
          <Pin
            key={id}
            id={id}
            lat={lat}
            lng={lng}
            title={id}
            onClick={this.displayInfo}
          />
        );
      });

    return (
      <div className="map">
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyCTpQfzQtswW-XYC8SiR_IHKVCvutdgF7g' }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}>
          { parks }
        </GoogleMapReact>
        <DisplayInfo element={ document.getElementById('modal') }>
          <InfoBox
            getDivStyle={ this.closeInfoBox }
            className={ this.state.infoBoxClassName }
            passData={ this.state.park }
          />
        </DisplayInfo>
      </div>
    );
  }
}

export default Map;
