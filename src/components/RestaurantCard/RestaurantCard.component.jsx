import React from "react";
import "antd/dist/antd.css";
import { Rate } from "antd";

import "./RestaurantCard.styles.scss";

class RestaurantCard extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            showMore: false,
        }
        console.log(this.props)
    }
    handleClick=()=> {
        this.setState({
          showMore: true,
        })
        console.log("show more clicked")
    }
      
    render(){
        const{ rating, restaurant, showMore } = this.props;
        const numberOfRatings = showMore ? restaurant.length : 1
        return (
            <div className="section">
                <div className="section-header">
                    <h3>{restaurant.restaurantName}</h3>
                </div>
                {rating.slice(0, numberOfRatings).map((rating, j) => ( 
                    <div className="section-details">
                        <span><Rate disabled defaultValue={rating.stars} /></span>
                        <p>{rating.comment}</p>
                    </div>
                ))}   
                <div className="right-arrow">
                    <button className="right" onClick={()=>this.handleClick()}><i className="fas fa-angle-down"></i></button>
                </div>
            </div>
        )
    }
}

export default RestaurantCard;