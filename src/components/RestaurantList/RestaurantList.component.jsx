import React from "react";
import RestaurantCard from "../RestaurantCard/RestaurantCard.component";

import "./RestaurantList.styles.scss";

class RestaurantList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      restaurants: [],
      showMore: false
    };
    console.log(this.props)
  }

  render() {
    
    const { restaurants } = this.state;

    const filteredRestaurants = [];
    for (let i = 0; i < restaurants.length; i++) {
      //   console.log("OLA", restaurants[i].rating, this.props.filteredRating);
      if (restaurants[i].rating >= this.props.rating) {
        filteredRestaurants.push(restaurants[i]);
        console.log(filteredRestaurants)
      }
    }
    return (
      <div className="restaurant-list">
        <RestaurantCard />
      </div>
    );
  }
}
//Put the whole section on its own component
export default RestaurantList;
