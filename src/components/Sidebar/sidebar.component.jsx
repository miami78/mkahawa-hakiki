import React from "react";
import FilterCard from "../FilterCard/FilterCard.component";
import RestaurantList from "../RestaurantList/RestaurantList.component";

import "./Sidebar.styles.scss";

class SideBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filteredRating: 1
    };
  }

  handleFilterChange = (rating) => {
    this.setState({ filteredRating: rating });
  };

  render() {
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

export default SideBar;
