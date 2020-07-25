import React from 'react';

import userIcon from '../../assets/user-icon.png';
import placeHolder from '../../assets/photo-placeholder.png';

const mapStyles = {
  width: '100%',
  height: '690px',
  position: 'absolute',
};

//map through rest and render marker
export class MapContainer extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      userPosition: {
        lat:-1.328635,
        lng:31.7951872
      },
      map: null,
      mapBounds:{},
      restaurants:[]
    };
  }

  componentDidMount() {
    this.initMap()
  }
  //Initialize google maps
  initMap() {
    
    // Checks for geolocation
    if(navigator.geolocation){
      
      // Get position from user and assign it to state
      navigator.geolocation.getCurrentPosition(position=>{
        this.setState({
          userPosition:{
            lat: position.coords.latitude,
            lng: position.coords.longitude
        }});
        console.log(this.state.userPosition)
      
        // Create new instance of google map
      let map;
      map = new window.google.maps.Map(document.getElementById('map'),{
        center: this.state.userPosition,
        zoom: 15,
        styles: mapStyles
      })
      console.log(this.state.userPosition)

      // event listener for mapbounds
      this.mapBoundsListener(map)

      //Create instance of a user marker on the map
      let userMarker = new window.google.maps.Marker({
        position: this.state.userPosition,
        map:map,
        icon: userIcon
      });
      this.setState({map:map})
      });
      
    }else{
      alert("Geolocation not available")
    }
  }

  // map bound event listener
  mapBoundsListener=(map)=>{
    // Updates when map is moved
    window.google.maps.event.addListener(map, 'idle', ()=>{
      this.setState({mapBounds: map.getBounds()});
      this.fetchPlaces()
    });
    console.log(this.state.mapBounds)
  }

  //Fetch places 
  fetchPlaces=()=> {
    //Make request based on curent map bounds
    let request = {
      bounds: this.state.mapBounds,
      type:['restaurant']
    }

    // google service request
    let service = new window.google.maps.places.PlacesService(this.state.map);
    service.nearbySearch(request, this.restaurantsDetails)
  }

  // Set places results
  restaurantsDetails=(results, status)=>{
    let restaurantArray;
    
    if (status === window.google.maps.places.PlacesServiceStatus.OK) {
      restaurantArray = results.map(restaurant=> {

        //get rating else return 0
        let avgRating, totalRatings;
        if(restaurant.rating){
          avgRating = restaurant.rating;
          totalRatings = restaurant.user_ratings_total;
        }else {
          avgRating = 0;
          totalRatings = 0
        };

        //get opening hours or return false
        let openNow;
        if(restaurant.opening_hours){
          openNow = restaurant.opening_hours.isOpen;
        }else {
          openNow = false;
        };

        // get price level or return 0
        let priceLevel;
        if(restaurant.price_level){
          priceLevel = restaurant.price_level;
        }else{
          priceLevel = 0;
        }

        // get 1st photo of every restaurant else a placeholder
        let photoUrl;
        if(restaurant.photos){
          photoUrl = restaurant.photos[0].getUrl({maxWidth: 600});
        } else {
          photoUrl = placeHolder;
        }

        return {
          restaurantName: restaurant.name,
          id: restaurant.place_id,
          lat: restaurant.geometry.location.lat(),
          lng: restaurant.geometry.location.lng(),
          address:restaurant.vicinity,
          avgRating: avgRating,
          totalRatings: totalRatings,
          price: priceLevel,
          openNow: openNow,
          photo: photoUrl
        }

        //Create instances of restaurant markers
        
      })
      //set the array of restaurants to state
      this.setState({restaurants: restaurantArray})
      console.log(this.state.restaurants)
    }
  }
  render() {
    return (
      <div 
        id="map"
        style= {mapStyles}
      />
      
    );
  }
}

export default MapContainer;

