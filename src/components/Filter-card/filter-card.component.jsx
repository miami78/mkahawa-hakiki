import React from 'react';
import 'antd/dist/antd.css';
import { Rate } from 'antd';

import './filter-card.styles.scss';

class FilterCard  extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      minRating: 1,
    }
  }
  
  //passing a function as a ref
  handleChange(rating) {
    this.setState({minRating:rating,})
    this.props.handleFilterChange(rating)
    console.log(rating)
    //props.parentFunction
  }
  
  render() {
    return ( 
      <div className="review-card">
          <h3>Filter by rating :</h3>
          <Rate 
            allowHalf 
            onChange={(rating)=> this.handleChange(rating)}
            value={this.state.minRating}
          />
      </div>
    );
  }
}

export default FilterCard;
// Line 19 in Sidebar: You aren't passing in an argument, 
//you should have an argument and use that in the setState instead of props
// To pass function to FilterCard, 
//you need to send it down from Sidebar to FilterCard as props on line 25
