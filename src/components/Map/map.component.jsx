import React from 'react';

import userIcon from '../../assets/user-icon.png';

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
      mapBounds:{}
    };
  }

  componentDidMount() {
    // Checks for geolocation
    if(navigator.geolocation){
      // Get position from user and assign it to state
      navigator.geolocation.getCurrentPosition(position=>{
        this.setState({userPosition:{
          lat: position.coords.latitude,
          lng: position.coords.longitude
        }})
        console.log(this.state.userPosition)
      });
      // Create new instance of google map
      let map;
      map = new window.google.maps.Map(this.refs.map,{
        center: this.state.userPosition,
        zoom:15,
        styles:mapStyles
      })
      this.mapBoundsListener(map)
      //Create instance of a user marker on the map
      let userMarker = new window.google.maps.Marker({
        position: this.state.userPosition,
        map:map,
        icon: userIcon
      })
      console.log(userMarker)
      this.setState({map:map})
    }else{
      alert("Geolocation not available")
    }
  }
  // // Checks for geolocation
  // checkUserLocation=(map)=>{
    
  // }
  // // Initialize google map
  // createGoogleMap=()=> {
    
  // }

  // map bound event listener
  mapBoundsListener=(map)=>{
    // Updates when map is moved
    window.google.maps.event.addListener(map, 'idle', ()=>{
      this.setState({mapBounds: map.getBounds()});
    });
  }
  
  render() {
    return (
      <div 
        id="google-map"
        ref="map"
        style= {mapStyles}
      />
      
    );
  }
}

export default MapContainer;

