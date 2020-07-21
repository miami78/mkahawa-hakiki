import React from 'react';
import ReactDOM from 'react-dom';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import Restaurants from '../../data/api.json';
const API_KEY = process.env.REACT_APP_MAPS;

const mapStyles = {
  width: '100%',
  height: '690px',
  position: 'relative',
  zIndex: '1'
};

//map through rest and render marker
export class MapContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentLocation: {
        lat:-1.328635,
        lng:31.7951872
      },
      restaurants: Restaurants
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
          currentLocation: {
            lat:pos.lat,
            lng:pos.lng
          }
        })
        console.log(this.state.currentLocation)
        this.fetchPlaces()
        this.nearbyRestaurants()
      });
    }
    
  }
  fetchPlaces=()=> { 

		// Create request for Google Places based on current map bounds
		let request = {
      location:this.state.currentLocation,
      radius: '500',
			type: ['restaurant'],
    };
    const {google} = this.props;
    const mapRef = this.refs.map;
    const node = ReactDOM.findDOMNode(mapRef)
    const maps = google.maps;
    this.map = new maps.Map(node);

		// Submit request
    let service = new window.google.maps.places.PlacesService(this.map);
    console.log(service)
    service.nearbySearch(request, this.nearbyRestaurants);
    console.log(request)
  }
  nearbyRestaurants=(results,status)=>{
    if (status === window.google.maps.places.PlacesServiceStatus.OK) {
      console.log("status OK")
      for (var i = 0; i < results.length; i++) {
        console.log(results[i]);
      }
    }
  }
  
  
  render() {
    const{ restaurants } = this.state;
    return (
      <Map
        google={this.props.google}
        zoom={14}
        style={mapStyles}
        center={{
         lat: this.state.currentLocation.lat,
         lng: this.state.currentLocation.lng
        }}
      >
        {restaurants.map((restaurant,index)=> (
          <Marker
          key= {index}
          position={{
            lat: restaurant.lat,
            lng: restaurant.long
          }}
        />
        ))}
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: API_KEY
})(MapContainer);

