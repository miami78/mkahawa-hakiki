import React from 'react';

const API_KEY = process.env.REACT_APP_MAPS;
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
    };
  }

  componentDidMount() {
    this.checkUserLocation()
    this.createGoogleMap()
  }
  // Checks for geolocation
  checkUserLocation=()=>{
    if(navigator.geolocation){
      // Get position from user and assign it to state
      navigator.geolocation.getCurrentPosition(position=>{
        this.setState({userPosition:{
          lat: position.coords.latitude,
          lng: position.coords.longitude
        }})
        console.log(this.state.userPosition)
      })
      
    }
  }
  // Initialize google map
  createGoogleMap=()=> {
    // Create new instance of google map
      new window.google.maps.Map(this.refs.map,{
        center: this.state.userPosition,
        zoom:15,
        styles:mapStyles
    })
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

