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
    console.log(this.props)
  }
  componentDidMount(){
    this.setState({map:this.props.mapObject})
    console.log(this.state.map)
  }
  render() {
    const filteredGRestaurants = this.props.gRestaurantData;
    console.log(filteredGRestaurants)
    console.log(Restaurant)

    const filteredRestaurants = [];
    for (let i = 0; i < Restaurant.length; i++) {
      //   console.log("OLA", restaurants[i].rating, this.props.filteredRating);
      if (Restaurant[i].rating >= this.props.rating) {
        filteredRestaurants.push(Restaurant[i]);
        console.log(filteredRestaurants)
      }
    }
    return (
      <div className="restaurant-list">
        {filteredGRestaurants.map((restaurant, index)=>(
          <RestaurantCard 
          key={index}
            isGoogle={true}
            restaurantName={restaurant.restaurantName}
            rating={[]}
          />
        ))}
        {filteredRestaurants.map((restaurant, index)=>(
          <RestaurantCard 
          //pass in comments
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
//Put the whole section on its own component
export default RestaurantList;
