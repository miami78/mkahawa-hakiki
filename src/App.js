import React from 'react';
import './App.css';
import Header from './components/Header/Header.component';
import MapContainer from './components/Map/Map.component';
import SideBar from './components/Sidebar/Sidebar.component';

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      restaurants:[]
    };
    console.log(this.props)
  }
  //temp function to see if everythings working
  fetchRestaurantData=(restaurants)=>{
    this.setState({ restaurants: restaurants });
    
  }
  //pass in props 
  //in mapcontainer call the function that was passed as props in the callback function
  render() {
    return (
      <div className="App">
        <Header />
        <MapContainer />
        <SideBar fetchRestaurantData={this.fetchRestaurantData}/>
      </div>
    );
  }
}

export default App;
