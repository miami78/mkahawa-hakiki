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
    this.state = {};
  }

  componentDidMount() {
    if (navigator.geolocation) {
      navigator.geolocation.watchPosition(function(position) {
        console.log("Latitude is :", position.coords.latitude);
        console.log("Longitude is :", position.coords.longitude);
      });
    }
  }
  render() {
    return (
      <Map
        google={this.props.google}
        zoom={14}
        style={mapStyles}
        initialCenter={{
         lat: -1.2877824,
         lng: 36.8672768
        }}
      >
        <Marker //Adds a marker on the google map using latitude and longitude
          
        />
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: API_KEY
})(MapContainer);

