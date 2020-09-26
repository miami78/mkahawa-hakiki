import React from 'react';
import './App.css';
import Header from './components/Header/header.component';
import MapContainer from './components/MapContainer/MapContainer.component';
import SideBar from './components/SideBar/SideBar.component';

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      restaurants:[],
      newRestaurantDAta:[],
      map:null
    };
  }

  fetchRestaurantData=(restaurants)=>{
    this.setState({ restaurants: restaurants });
  }

  fetchMapObject=(map)=>{
    this.setState({ map: map });
  }
  //pass in new rest array from map container 
  fetchNewRestaurantData=(newRestaurants)=>{
    this.setState({ newRestaurantDAta: newRestaurants });
  }
  
  render() {
    return (
      <div className="App">
        <Header />
        <MapContainer 
        onMapLoaded={this.fetchMapObject}
        onDataReceived={this.fetchRestaurantData}
        onNewRestData={this.fetchNewRestaurantData}
        />
        <SideBar 
        mapObject={this.state.map}
        gRestaurantData={this.state.restaurants} 
        newRestaurants={this.state.newRestaurantDAta}
        />
      </div>
    );
  }
}

export default App;
