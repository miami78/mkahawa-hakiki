import React from 'react';
import './App.css';
import Header from './components/Header/header.component';
import MapContainer from './components/Map/map.component';

function App() {
  return (
    <div className="App">
      <Header />
      <MapContainer />
    </div>
  );
}

export default App;
