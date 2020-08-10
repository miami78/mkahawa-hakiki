import React from "react";
import "antd/dist/antd.css";
import { Rate } from "antd";

import "./RestaurantCard.styles.scss";

class RestaurantCard extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            showMore: false,
            restaurant:{
                name: "",
                rating: 1,
                reviews: [],
                business_status:"" ,
                opening_hours:{
                    weekday_text:["NOT AVAILABLE"]
                }
            },
            
        }
    }

    handleClick=()=> {
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
                            reviews: place.review,
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
        const noReviewAvailable = !this.state.restaurant.reviews;
        const noOpeningHours = !this.state.restaurant.opening_hours;
        return (
            <div className="section">
                <div className="section-header">
                    <h3>{this.props.restaurantName}</h3>
                </div>
                <div className="section-ratings">
                    <p>({this.props.totalRatings})</p>
                    <span><Rate allowHalf disabled value={this.props.rating} /></span>
                </div>
                <div className="section-details">
                    <img alt="restaurant" src={this.props.photo} />
                    <p>{this.props.address}</p>
                    <p>{this.props.openNow}</p>
                </div>
                {(() => {
                    if (noReviewAvailable && noOpeningHours) {
                        return (
                          <div><h2>No data available</h2></div>
                        )
                        
                    }else if (noReviewAvailable) {
                        return(
                            <div className="open-hours">
                                <h2>No review available</h2>
                                <h3>Opening hours</h3>
                                {this.state.restaurant.opening_hours.weekday_text.map((day,i)=>(
                                    <p key={i}><br/>{day}</p>
                                ))}
                                
                            </div> 
                        )   
                    }else{
                        return (
                            <div className="section-details-review">
                                {this.state.restaurant.reviews.map((review, j) => ( 
                                    <div className="review-text"key={j}>
                                        <h2>{review.author_name}</h2>
                                        <span><Rate disabled value={review.rating} /></span>
                                        <p>{review.text}</p>
                                        <div className="border-bottom"></div>
                                    </div>
                                ))} 
                            </div>
                        )
                    }
                })()}
                
                <div className="right-arrow">
                    <button className="right" onClick={()=>this.handleClick()}><i className="fas fa-angle-down"></i></button>
                </div>
            </div>
        )
    }
}


//if else statement
export default RestaurantCard;