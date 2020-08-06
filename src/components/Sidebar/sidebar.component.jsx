import React from "react";
import FilterCard from "../FilterCard/FilterCard.component";
import RestaurantList from "../RestaurantList/RestaurantList.component";

import "./Sidebar.styles.scss";

//pass in the name of a new function as props to the review card
//React pass function as props
//set state to hold rating
class SideBar extends React.Component {
  // Set up state in sidebar component, to hold the filtered rating.
  constructor(props) {
    super(props);
    this.state = {
      filteredRating: 1,
    };
    console.log(this.props)
  }
  // Make a function in sidebar that sets the state with a rating that is passed in.
  handleFilterChange=(rating)=> {
    this.setState({ filteredRating: rating });
  }

  render() {
    //console.log("OLAAAA", this.state);
    return (
      <div className="restaurant-card">
        <FilterCard handleFilterChange={this.handleFilterChange} />
        <RestaurantList 
          rating={this.state.filteredRating}
          gRestaurantData={this.props.gRestaurantData}
          mapObject={this.props.mapObject}
        />
      </div>
    );
  }
}

//react conditional rendering for the dropdown card
export default SideBar;
