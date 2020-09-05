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
    
    const filteredGRestaurants = [];
    for (let i = 0; i < this.props.gRestaurantData.length; i++) {
      if (this.props.gRestaurantData[i].avgRating >= this.props.rating) {
        filteredGRestaurants.push(this.props.gRestaurantData[i]);
      }
    }
    const filteredRestaurants = [];
    for (let i = 0; i < Restaurant.length; i++) {
      if (Restaurant[i].rating >= this.props.rating) {
        filteredRestaurants.push(Restaurant[i]);
      }
    }
    const formRestaurants = [];
    for (let i = 0; i < this.props.newRestaurants.length; i++) {
      if (this.props.newRestaurants[i].rating >= this.props.rating) {
        formRestaurants.push(this.props.newRestaurants[i]);
      }
    }
    return (
      <div className="restaurant-list">
        {formRestaurants.map((restaurant, index)=>(
          <RestaurantCard 
          key={index}
          isGoogle={false}
          rating={restaurant.rating}
          restaurantName={restaurant.restaurantName}
          address={""}
          photo={""}
          reviews={[]}
          />
        ))}
        {filteredGRestaurants.map((restaurant, index)=>(
          <RestaurantCard 
          key={index}
            mapObject={this.props.mapObject}
            isGoogle={true}
            id={restaurant.id}
            restaurantName={restaurant.restaurantName}
            rating={restaurant.avgRating}
            address={restaurant.address}
            photo={restaurant.photo}
            openNow={restaurant.openNow}
            totalRatings={restaurant.totalRatings}
            lat={restaurant.lat}
            lng={restaurant.lng}
          />
        ))}
        {filteredRestaurants.map((restaurant, index)=>(
          <RestaurantCard 
           key={index}
           isGoogle={false}
           rating={restaurant.rating}
           restaurantName={restaurant.restaurantName}
           address={restaurant.address}
           photo={restaurant.photo}
           reviews={restaurant.reviews}
           lat={restaurant.lat}
           lng={restaurant.lng}
          />
        ))}
      </div>
    );
  }
}
export default RestaurantList;
