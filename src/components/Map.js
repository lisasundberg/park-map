import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import Pin from './Pin';


class Map extends Component {
  static defaultProps = {
    center: {
      lat: 59.31,
      lng: 18.07
    },
    zoom: 12
  };

  render() {

    return (
      // Important! Always set the container height explicitly
      <div className="map">
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyCTpQfzQtswW-XYC8SiR_IHKVCvutdgF7g' }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <Pin
            lat={59.312555}
            lng={18.087676}
            title="Vitabergsparken"
          />
          <Pin
            lat={59.313137}
            lng={18.037121}
            title="Tantolunden"
          />
        </GoogleMapReact>
      </div>
    );
  }
}

export default Map;
