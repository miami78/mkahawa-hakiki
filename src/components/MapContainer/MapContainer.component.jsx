import React from 'react';
import Map from '../../utils/getMap';
import RestaurantForm from '../Form/form.component';
import userIcon from '../../assets/user-icon.png';
import placeHolder from '../../assets/placeholder.png';
import Restaurants from '../../data/api.json';

//map through rest and render marker
export class MapContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userPosition: {
        lat: -1.328635,
        lng: 31.7951872
      },
      restPos: {
        lat: -1.328635,
        lng: 31.7951872
      },
      map: null,
      restaurants: [],
      newRestaurants: [],
      storedApiMarkers: [],
      isMapClicked: false,
      lat:"",
      lng:"",
      showForm: false,
      mapBounds:{
        east: 36.87211077497662,
        north: -1.2455600060195045,
        south: -1.2159552503047664,
        west: 36.91581576259662
      }
    };
  }

  componentDidMount() {
    this.getUserPosition();
  }

  componentDidUpdate(){
    this.getUserPosition()
  }

  // Checks for geolocation
  getUserPosition() {
    if (navigator.geolocation) {
      // Get position from user and assign it to state
      navigator.geolocation.getCurrentPosition((position) => {
        this.setState({
          userPosition: {
            lat: position.coords.latitude,
            lng: position.coords.longitude
          }
        }); 
      });
    } else {
      alert("Geolocation not available");
    }
  }
  
  //Fetch places
  fetchPlaces = (location) => {
    //Make request based on current map bounds
    let request = {
      location: location,
      type: ["restaurant"],
      radius: 500
    };
    // google service request
    let service = new window.google.maps.places.PlacesService(this.state.map);
    service.nearbySearch(request, this.restaurantsDetails);
  };

  // Set places results
  restaurantsDetails = (results, status) => {
    let restaurantArray;
    //store an array of markers
    let storedMarkers = [];
    //get json restaurants
    Restaurants.forEach((restaurant)=>{
      const jsonMarker = new window.google.maps.Marker({
        position: restaurant.location,
        map: this.state.map,
        title: restaurant.restaurantName
      });
      storedMarkers.push(jsonMarker);
    })
    console.log(storedMarkers)

    if (status === window.google.maps.places.PlacesServiceStatus.OK) {
      results.forEach((results) => {
        //copy same as restaurant array
        const marker = new window.google.maps.Marker({
          position: results.geometry.location,
          map: this.state.map,
          title: results.name
        });
        //get json ,filter and for each add marker
        //only use json data for markers
        storedMarkers.push(marker)
        // console.log(this.state.storedApimarkers)
      });
      console.log(storedMarkers)
      
      this.setState({ storedApiMarkers: storedMarkers });
      
      restaurantArray = results.map((restaurant) => {
        //get rating else return 0
        let avgRating, totalRatings;
        if (restaurant.rating) {
          avgRating = restaurant.rating;
          totalRatings = restaurant.user_ratings_total;
        } else {
          avgRating = 0;
          totalRatings = 0;
        }

        //get opening hours or return false
        let openNow;
        if (restaurant.opening_hours) {
          openNow = restaurant.opening_hours.isOpen;
        } else {
          openNow = false;
        }

        // get price level or return 0
        let priceLevel;
        if (restaurant.price_level) {
          priceLevel = restaurant.price_level;
        } else {
          priceLevel = 0;
        }

        // get 1st photo of every restaurant else a placeholder
        let photoUrl;
        if (restaurant.photos) {
          photoUrl = restaurant.photos[0].getUrl();
        } else {
          photoUrl = placeHolder;
        }

        return {
          restaurantName: restaurant.name,
          id: restaurant.place_id,
          lat: restaurant.geometry.location.lat(),
          lng: restaurant.geometry.location.lng(),
          address: restaurant.vicinity,
          avgRating: avgRating,
          totalRatings: totalRatings,
          price: priceLevel,
          openNow: openNow,
          photo: photoUrl
        };
      });

      //set the array of restaurants to state
      this.setState({ restaurants: restaurantArray });
    } else {
      restaurantArray = [];
      this.setState({ restaurants: restaurantArray });
    }
    this.props.onDataReceived(this.state.restaurants);
  };

  //function that gets restaurant data from the form component

  createRestaurantFromFormData=(RestaurantName, rating)=>{
    let newRestaurant = new window.google.maps.Marker({
      position: this.state.restPos,
      map: this.state.map,
      title: "restaurant location",
      icon: userIcon
    });
    let newRestaurantArray = this.state.newRestaurants;
    newRestaurantArray.push({
      restaurantName: RestaurantName,
      rating: rating
    })
    this.setState({ newRestaurants: newRestaurantArray})
    this.props.onNewRestData(newRestaurantArray)
    this.handleClose()
  }

  handleClose=()=>{
    this.setState({showForm:false})
  }

  render() {
    return (
      <div>
      <Map
        id="myMap"
        options={{
          center: this.state.userPosition,
          zoom: 15
        }}
        onMapLoad={(map) => {
          //Create instance of a user marker on the map
          let userMarker = new window.google.maps.Marker({
            position: this.state.userPosition,
            map: map,
            title: "user location",
            icon: userIcon,
          });
          this.setState({ map: map });
          this.props.onMapLoaded(map);
          //this.fetchPlaces(this.state.userPosition);
        }}
        updateBounds={(map)=>{
          //remove old markers
          while(this.state.storedApiMarkers.length){
            this.state.storedApiMarkers.pop().setMap(null)
          }
          this.setState({storedApiMarkers: []})
          this.fetchPlaces(map.getCenter())
        }}
        onClick={(e)=>{
          let latitude = e.latLng.lat()
          let longitude = e.latLng.lng()
          this.setState({
            restPos: {
              lat: latitude,
              lng: longitude
            },
          })
          //set show form to true
          this.setState({
            showForm: true
          })
        }}>
      </Map>
      {this.state.showForm && <div><RestaurantForm onRestSubmit={this.createRestaurantFromFormData}/></div>}
      </div>
    );
  }
}

export default MapContainer;
