import React from 'react';
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
      userLocation: {
        lat:-1.328635,
        lng:31.7951872
      },
      restaurants: [],
      mapBounds: []
    };
  }

  componentDidMount() {
    this.getUserPosition()
    this.nearbyRestaurants()
  }
  componentDidUpdate(){
    this.getUserPosition()
    this.nearbyRestaurants()
  }
  //function to get userLocation
  getUserPosition=()=>{
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position)=> {
        const pos = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
        }
        // console.log("Latitude is :", pos.lat);
        // console.log("Longitude is :", pos.lng);
        this.setState({
          userLocation: {
            lat:pos.lat,
            lng:pos.lng
          }
        })
        //console.log(this.state.userLocation)
      });
    }else{
      window.alert("Geolocation not available.");
    }
  }
  fetchPlaces=(mapProps, map)=> { 
    const {google} = mapProps;
    
    // Create request for Google Places based on current map bounds
		let request = {
      location:this.state.userLocation,
      radius: '500',
      type: ['restaurant'],
      fields: ["name", "formatted_address", "place_id", "geometry","rating"]
    };

		// Submit request
    const service = new google.maps.places.PlacesService(map);
    service.nearbySearch(request, this.nearbyRestaurants);
    console.log(request)
  }

  nearbyRestaurants=(results,status)=>{
    if (status === window.google.maps.places.PlacesServiceStatus.OK) {
      console.log("status OK")
      for (var i = 0; i < results.length; i++) {
        this.setState({restaurants:results})
        console.log(this.state.restaurants[i]);
        
      }   
      // let place = results[0]  
      // console.log(place) 
      // //get details
      // service.getDetails({placeId: place.place_id}, function(place, status){
      //   if (status === window.google.maps.places.PlacesServiceStatus.OK) {
      //     for(let review of place.reviews){
      //       console.log(review)
      //     }
      //   } 
      // });
    } 
  
  }


  
  render() {
    const{ restaurants } = this.state;
    return (
      <Map
        google={this.props.google}
        zoom={14}
        style={mapStyles}
        onReady={this.fetchPlaces}
        center={{
         lat: this.state.userLocation.lat,
         lng: this.state.userLocation.lng
        }}
      >
        {restaurants.map((restaurant,index)=> (
          <Marker
          key= {index}
          position={{
            lat: restaurant.geometry.location.lat,
            lng: restaurant.geometry.location.lng
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

