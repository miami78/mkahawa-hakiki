import React from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
const API_KEY = process.env.REACT_APP_MAPS;

const mapStyles = {
  width: '100%',
  height: '690px',
  position: 'relative',
  zIndex: '1'
};

export class MapContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mapCenter: {
        lat:-1.328635,
        lng:31.7951872
      }
    };
  }

  componentDidMount() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position)=> {
        const pos = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
        }
        console.log("Latitude is :", pos.lat);
        console.log("Longitude is :", pos.lng);
        this.setState({
          mapCenter: {
            lat:pos.lat,
            lng:pos.lng
          } 
        })
      });
    }
  }
  render() {
    return (
      <Map
        google={this.props.google}
        zoom={14}
        style={mapStyles}
        center={{
         lat: this.state.mapCenter.lat,
         lng: this.state.mapCenter.lng
        }}
      >
        <Marker //Adds a marker on the google map using latitude and longitude
        draggable={true}
          position={{
            lat: this.state.mapCenter.lat,
            lng: this.state.mapCenter.lng
          }}
        />
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: API_KEY
})(MapContainer);

