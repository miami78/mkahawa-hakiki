import React from "react";
import "antd/dist/antd.css";
import { Rate } from "antd";

import "./RestaurantCard.styles.scss";

class RestaurantCard extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            showMore: false,
            restaurant:[]
        }
    }
    handleClick=()=> {
        //check if show more is false if it is then set it to true {
            //check if isGoogle is true, 
            // if so then do the getDetailsSearch
            //store getDetails Review array in state
            //else do nothing
        //}
        //else set show more to false
        if(this.state.showMore === false){
            //set showMore to true
            this.setState({
                showMore: true,
              })
            if(this.props.isGoogle === true){
                let request ={
                    placeId: this.props.id,
                    fields: ['name','rating','business_status','opening_hours','reviews']
                }
                let service = new window.google.maps.places.PlacesService(this.props.mapObject);
                const getRestDetails=(place, status)=> {
                    if (status === window.google.maps.places.PlacesServiceStatus.OK) {
                        console.log("places service OK")
                        console.log(place)
                        this.setState({ restaurant: place });
                        return {
                            name: place.name,
                            rating: place.rating,
                            reviews: place.review
                        }
                    }
                }
                service.getDetails(request, getRestDetails);
            }
            
        }else{
            this.setState({
                showMore: false,
              })
        }
    }
    
    render(){
        return (
            <div className="section">
                <div className="section-header">
                    <h3>{this.props.restaurantName}</h3>
                </div>
                <div className="section-details">
                    <span><Rate disabled defaultValue={this.state.restaurant.rating} /></span>
                    {this.state.restaurant.reviews.map((review, j) => ( 
                        <div key={j}>
                            <p>{review.author_name}</p>
                            <p>{review.rating}</p>
                            <p>{review.text}</p>
                        </div>
                    ))} 
                </div>
                <div className="right-arrow">
                    <button className="right" onClick={()=>this.handleClick()}><i className="fas fa-angle-down"></i></button>
                </div>
            </div>
        )
    }
}

export default RestaurantCard;