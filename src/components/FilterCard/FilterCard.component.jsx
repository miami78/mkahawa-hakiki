import React from "react";
import "antd/dist/antd.css";
import { Rate } from "antd";

import "./FilterCard.styles.scss";

class FilterCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      minRating: 1
    };
  }

  //passing a function as a ref
  handleChange = rating => {
    this.setState({ minRating: rating });
    this.props.handleFilterChange(rating);
    console.log(rating);
    //props.parentFunction
  };

  render() {
    return (
      <div className="review-card">
        <h3>Filter by rating :</h3>
        <Rate
          allowHalf
          onChange={rating => this.handleChange(rating)}
          value={this.state.minRating}
        />
      </div>
    );
  }
}

export default FilterCard;
