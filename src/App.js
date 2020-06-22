import React from 'react';
import './App.css';
import Header from './components/Header/header.component';
import MapContainer from './components/Map/map.component';
import RestaurantCard from './components/Restaurant-card/restaurant-card.component';

function App() {
  return (
    <div className="App">
      <Header />
      <MapContainer />
      <RestaurantCard />
    </div>
  );
}

export default App;
