import React from "react";
import "antd/dist/antd.css";
import { Rate } from "antd";
import rightArrow from "../../assets/right-arrow.png";
import Restaurants from "../../data/api.json";

import "./restaurant-review-card.styles.scss";

class RestaurantReviewCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      restaurants: [],
      showMore: false
    };
  }
  componentDidMount() {
    this.setState({
      restaurants: Restaurants
    });
    
  }
  handleClick() {
    this.setState({showMore: true})
  }
  render() {
    const { restaurants } = this.state;

    //console.log("DATA", this.props.rating);

    const filteredRestaurants = [];
    for (let i = 0; i < restaurants.length; i++) {
      //   console.log("OLA", restaurants[i].rating, this.props.filteredRating);
      if (restaurants[i].rating >= this.props.rating) {
        filteredRestaurants.push(restaurants[i]);
      }
    }

    //console.log("FILTERED", filteredRestaurants);
    const numberOfRatings = this.state.showMore ? restaurants.length : 1
    return (
      <div className="restaurant-list">
        {filteredRestaurants.map((restaurant, id) => (
          <div key={id} className="section">
            <div className="section-header">
              <h3>{restaurant.restaurantName}</h3>
            </div>
            {restaurant.ratings.slice(0, numberOfRatings).map((rating, j) => (
              <div key={j} className="section-details">
                <span>
                  <Rate disabled defaultValue={rating.stars} />
                </span>
                <p>{rating.comment}</p>
              </div>
            ))}
            <div className="right-arrow">
              <img src={rightArrow} alt="enter arrow" onClick={()=> this.handleClick()}/>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default RestaurantReviewCard;
