import React from 'react';
import './App.css';
import Header from './components/Header/Header.component';
import MapContainer from './components/Map/Map.component';
import SideBar from './components/Sidebar/Sidebar.component';

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      restaurants:[],
      map:null
    };
  }
  //temp function to see if everythings working
  fetchRestaurantData=(restaurants)=>{
    this.setState({ restaurants: restaurants });
    console.log(restaurants)
  }
  fetchMapObject=(map)=>{
    this.setState({ map: map });
    console.log(this.state.map)
  }
  //pass in props 
  //in mapcontainer call the function that was passed as props in the callback function
  render() {
    return (
      <div className="App">
        <Header />
        <MapContainer 
        onMapLoaded={this.fetchMapObject}
        onDataReceived={this.fetchRestaurantData}/>
        <SideBar 
        mapObject={this.state.map}
        gRestaurantData={this.state.restaurants} />
      </div>
    );
  }
}

export default App;
