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
                console.log("google is true")
                let request ={
                    placeId: this.props.id,
                    fields: ['reviews ', 'rating','icon','opening_hours']
                }
                let service = new window.google.maps.places.PlacesService(this.props.mapObject);
                service.getDetails(request, getRestDetails);

                function getRestDetails(result, status) {
                    let reviewArray;
                    if (status === window.google.maps.places.PlacesServiceStatus.OK) {
                        console.log("status ok")
                      result.push(reviewArray)
                    }
                  }
            }
            
        }else{
            this.setState({
                showMore: false,
              })
              console.log("google is false")
        }
        console.log("show more clicked")
    }
    
    render(){
        const numberOfRatings = this.state.showMore ? this.props.rating.length : 1
        return (
            <div className="section">
                <div className="section-header">
                    <h3>{this.props.restaurantName}</h3>
                </div>
                {this.props.rating.slice(0, numberOfRatings).map((rating, j) => ( 
                    <div className="section-details">
                        <span><Rate disabled defaultValue={rating.stars} /></span>
                        <p>{this.props.rating.comment}</p>
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