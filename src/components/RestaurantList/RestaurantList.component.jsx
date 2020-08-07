import React from "react";
import RestaurantCard from "../RestaurantCard/RestaurantCard.component";
import Restaurant from "../../data/api.json";

import "./RestaurantList.styles.scss";

class RestaurantList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      restaurants: [],
      map:null
    };
  }
  render() {
    
    const filteredGRestaurants = this.props.gRestaurantData;

    const filteredRestaurants = [];
    for (let i = 0; i < Restaurant.length; i++) {
      if (Restaurant[i].rating >= this.props.rating) {
        filteredRestaurants.push(Restaurant[i]);
      }
    }
    return (
      <div className="restaurant-list">
        {filteredGRestaurants.map((restaurant, index)=>(
          <RestaurantCard 
          key={index}
            mapObject={this.props.mapObject}
            isGoogle={true}
            id={restaurant.id}
            restaurantName={restaurant.restaurantName}
            rating={[]}
          />
        ))}
        {filteredRestaurants.map((restaurant, index)=>(
          <RestaurantCard 
           key={index}
           isGoogle={false}
           rating={restaurant.ratings}
           restaurantName={restaurant.restaurantName}
          />
        ))}
      </div>
    );
  }
}
export default RestaurantList;
