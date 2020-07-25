import React from 'react';
import './App.css';
import Header from './components/Header/header.component';
import MapContainer from './components/Map/map.component';
import SideBar from './components/Sidebar/sidebar.component';

class App extends React.Component {
  constructor () {
    super()
    this.state = {
    };
  }
  render() {
    return (
      <div className="App">
        <Header />
        <MapContainer />
        <SideBar />
      </div>
    );
  }
}

export default App;