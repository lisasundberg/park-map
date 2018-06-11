import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import Pin from './Pin';

class Map extends Component {
  static defaultProps = {
    center: {
      lat: 59.31,
      lng: 18.07
    },
    zoom: 12,
    greatPlaces: [
      {id: 'Vitabergsparken', lat: 59.31255, lng: 18.087676},
      {id: 'Tantolunden', lat: 59.313137, lng: 18.037121}
    ]
  };

  render() {
    const places = this.props.greatPlaces
      .map(place => {
        const { id, lat, lng } = place;
        return (
          <Pin
            key={id}
            lat={lat}
            lng={lng}
            title={id}
          />
        );
      });

    return (
      // Important! Always set the container height explicitly
      <div className="map">
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyCTpQfzQtswW-XYC8SiR_IHKVCvutdgF7g' }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}>
          { places }
        </GoogleMapReact>
      </div>
    );
  }
}

export default Map;
