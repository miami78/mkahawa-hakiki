import React from 'react';
import './App.css';
import Header from './components/Header/Header.component';
import MapContainer from './components/MapContainer/MapContainer.component';
import SideBar from './components/Sidebar/Sidebar.component';

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      restaurants:[],
      map:null
    };
  }

  fetchRestaurantData=(restaurants)=>{
    this.setState({ restaurants: restaurants });
  }

  fetchMapObject=(map)=>{
    this.setState({ map: map });
  }
  
  render() {
    return (
      <div className="App">
        <Header />
        <MapContainer 
        onMapLoaded={this.fetchMapObject}
        onDataReceived={this.fetchRestaurantData}
        />
        <SideBar 
        mapObject={this.state.map}
        gRestaurantData={this.state.restaurants} />
      </div>
    );
  }
}

export default App;
