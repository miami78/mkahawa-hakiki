import React from 'react';
import 'antd/dist/antd.css';
import { Rate } from 'antd';
import Restaurants from '../../data/api.json';

import './restaurant-card.styles.scss';


class RestaurantCard extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            restaurants:{},
        };
    }
    componentDidMount() {
        Restaurants.map(restaurants => {
            this.setState({restaurants: restaurants})
            return console.log(restaurants)
        })
        
    }
    render(){
        console.log(this.state.restaurants.ratings)
        return (
            <div className="restaurant-list">
                <div className="section-divider-bottom-line"></div>
                <div className= "section">
                    <div className="section-header">
                        <h3>{this.state.restaurants.restaurantName}</h3>
                        <span><Rate allowHalf defaultValue={this.state.restaurants.ratings}/></span>
                    </div>
                </div>
                <div className="section-divider-bottom-line"></div>
            </div>
        );
    }
}

export default RestaurantCard;
