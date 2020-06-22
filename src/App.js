import React from 'react';
import './App.css';
import Header from './components/Header/header.component';
import MapContainer from './components/Map/map.component';
import ReviewCard from './components/Review-card/review-card.component';

function App() {
  return (
    <div className="App">
      <Header />
      <MapContainer />
      <ReviewCard />
    </div>
  );
}

export default App;
