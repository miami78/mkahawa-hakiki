import React from 'react';

import './add-review-form.styles.scss';

class RestaurantForm extends React.Component{
    constructor(props){
      super(props);
      this.state = {
        reviewerName:'',
        review:'',
        rating:3
      };
    }

    handleNameChange=(event)=> {
      this.setState({
        reviewerName: event.target.value
      });
    }

    handleReviewChange=(event)=> {
        this.setState({
            review: event.target.value
        });
      }

    handleRatingChange=(event)=> {
      let rating = parseInt(event.target.value);
      this.setState({
        rating: rating
      });
    }

    handleSubmit=(event)=> {
      event.preventDefault();
      this.props.onReviewSubmit(this.state.reviewerName, this.state.rating, this.state.review)
      console.log(this.state.rating)
      console.log(this.state.review)
      console.log(this.state.reviewerName)
    }

    render() {
        return (
            <form className="form-container" onSubmit={this.handleSubmit}>
                <input type="text" placeholder="Reviewer Name" required onChange={this.handleNameChange}/>
                <input type="text" placeholder="Review" required onChange={this.handleReviewChange}/>
                <input type="number" min="1" max="5" placeholder="Rating" required onChange={this.handleRatingChange}/>
                <button>SUBMIT</button>
            </form>
        );
    }

}

export default RestaurantForm;
