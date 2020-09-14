import React from "react";
import "antd/dist/antd.css";
import { Rate } from "antd";
import AddReview from "../Form/addReview.component";
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
            showForm:false,
            newReview:[],
            addReview: false,
            
        }
    }

    closeCard=()=>{
        this.setState({
            showMore: false
        })
    }

    handleClick=()=> {
        if(this.state.showMore === false && this.props.isGoogle === true){
            this.setState({
                showMore: true,
            })
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
            
        }else if(this.state.showMore === false && this.props.isGoogle === false){
            this.setState({
                showMore: true,
            })
        }
        else {
            this.setState({
                showMore: false,
            })
        }
    }
    
    handleAddReview=()=>{
        this.setState({
            showForm: true
          })
    }

    handleClose=()=>{
        this.setState({showForm:false})
    }

    addReviewFromFormData=(reviewerName, rating, review)=>{
        let newFormReview = this.state.newReview;
        newFormReview.push({
            reviewerName: reviewerName,
            rating: rating,
            review: review
        })
        this.setState({
            addReview: true
        })
        this.handleClose()
        console.log(this.state.newReview)
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
                    <p>({this.props.totalRatings || this.props.rating})</p>
                    <span><Rate allowHalf disabled value={this.props.rating} /></span>
                </div>
                <div className="section-details">
                    <img alt="restaurant" src={this.props.photo} />
                    <p>{this.props.address}</p>
                    <p>{this.props.openNow}</p>
                </div>
                <button className="add-review" onClick={()=> this.handleAddReview()}>Add Review</button>{this.state.showForm && <div><AddReview onReviewSubmit={this.addReviewFromFormData}/></div>}
                
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
                    }
                })()}
                {(() => {
                    //new reviews
                    if (this.state.showMore === true && this.state.addReview === true){
                        return(
                            <div className="section-details-review"> 
                            {
                                this.state.newReview.map((review, i) => (
                                    <div className="review-text" key={i}>
                                        <h2>{review.reviewerName}</h2>
                                        <span><Rate disabled value={review.rating} /></span>
                                        <p>{review.review}</p>
                                        <div className="border-bottom"></div>
                                    </div>
                                ))
                            }
                            </div>
                        )
                    }
                })()}
                {(() => {
                    //json results reviews
                    if (this.state.showMore === true && this.props.isGoogle === false ){
                        return(
                            <div className="section-details-review">
                            {    this.props.reviews.map((review, j) => ( 
                                    <div className="review-text"key={j}>
                                        <h2>{review.author_name}</h2>
                                        <span><Rate disabled value={review.rating} /></span>
                                        <p>{review.text}</p>
                                        <div className="border-bottom"></div>
                                    </div>
                                ))  
                                  
                            } 
                            </div>
                        )

                    }
                })()}
                {(() => {
                    if(this.state.showMore === true && this.props.isGoogle === true){
                        return (
                            <div className="section-details-review">
                                {this.state.restaurant.reviews.map((review, j) => ( 
                                    <div className="review-text"key={j}>
                                        <img alt="author" src={review.profile_photo_url} />
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
                
                <button className="show-more" onClick={()=>this.handleClick()}>{this.state.showMore ? true : false}<i className="fas fa-angle-down"></i></button>
                
            </div>
        )
    }
}


//if else statement
export default RestaurantCard;