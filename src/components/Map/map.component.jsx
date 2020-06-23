import React from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
const API_KEY = process.env.REACT_APP_MAPS;

const mapStyles = {
  width: '100%',
  height: '690px',
  position: 'fixed',
};

export class MapContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "React"
    };
  }
  render() {
    return (
      <Map
        google={this.props.google}
        style={mapStyles}
        zoom={14}
      >
      <Marker onClick={this.onMarkerClick}
      name={'Current location'} />
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: API_KEY
})(MapContainer);

