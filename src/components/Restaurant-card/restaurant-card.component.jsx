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
            newRestaurants:[]
        };
    }
    componentDidMount() {
        this.setState({restaurants: Restaurants})
    }
    //conditionaly render inside map,if each rest is equal or above the filter
    render(){
        console.log(this.state.restaurants)
        return (
            <div className="restaurant-list">
                <div className="section-divider-bottom-line"></div>
                {
                    this.state.restaurants.map((rest)=> {
                        return(
                            <div className= "section">
                            <div className="section-header">
                                <h3>{rest.restaurantName}</h3>
                                <span><Rate disabled defaultValue={rest.ratings[0].stars}/></span>
                                <p>{rest.ratings[0].comment}</p>
                            </div>
                        </div>  
                        )
                    })
                }
                <div className="section-divider-bottom-line"></div>
            </div>
        );
    }
}

export default RestaurantCard;
