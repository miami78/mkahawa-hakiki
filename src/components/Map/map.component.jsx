import React from 'react';

const API_KEY = process.env.REACT_APP_MAPS;
const mapStyles = {
  width: '100%',
  height: '690px',
  position: 'absolute',
  zIndex: '-1'
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
    this.googleMapRef = React.createRef()
  }

  componentDidMount() {
    const googleMapScript = document.createElement('script')
    googleMapScript.src = `https://maps.googleapis.com/maps/api/js?key=${API_KEY}&libraries=places`
    window.document.body.appendChild(googleMapScript)
    googleMapScript.addEventListener("load", () => {
      this.checkUserLocation()
      this.googleMap = this.createGoogleMap();
      this.marker = this.createMarker()
    });
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
      new window.google.maps.Map(this.googleMapRef.current,{
        center: this.state.userPosition,
        zoom:15,
        styles:mapStyles
    })
  }
  createMarker = () =>
  new window.google.maps.Marker({
    position: this.state.userPosition,
    map: this.googleMap,
  })
  render() {
    return (
      <div 
        id="google-map"
        ref={this.googleMapRef}
        style= {mapStyles}
      />
      
    );
  }
}

export default MapContainer;

