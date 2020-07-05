import React from 'react';
import 'antd/dist/antd.css';
import { Rate } from 'antd';
import Restaurants from '../../data/api.json';


import './restaurant-card.styles.scss';


class RestaurantCard extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            restaurants:[],
        };
    }
    componentDidMount() {
        this.setState({
            restaurants: Restaurants
        })
    }
    //conditionaly render inside map,if each rest is equal or above the filter    
    render(){
        console.log(this.state.restaurants)
        return (
            <div className="restaurant-list">
                {
                    this.state.restaurants.map((restaurant, index)=> {
                        return(
                        <div key={index} className= "section">
                            <div className="section-header">
                                <h3>{restaurant.restaurantName}</h3>
                            </div>
                {
                    restaurant.ratings.map((rating,i)=> {
                        return(
                            <div key={i} className="section-details">
                            <span><Rate disabled defaultValue={rating.stars}/></span>
                            <p>{rating.comment}</p>
                            </div>
                        )
                    })
                }
                        </div>  
                        )
                    })
                }
            </div>
        );
    }
}

export default RestaurantCard;
