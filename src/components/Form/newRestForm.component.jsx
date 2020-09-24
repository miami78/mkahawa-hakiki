import React from 'react';

import './new-rest-form.styles.scss';

class RestaurantForm extends React.Component{
    constructor(props){
      super(props);
      this.state = {
        RestaurantName:'',
        rating:3
      };
    }

    handleNameChange=(event)=> {
      this.setState({
        RestaurantName: event.target.value
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
      this.props.onRestSubmit(this.state.RestaurantName, this.state.rating)
      console.log(this.state.rating)
      console.log(this.state.RestaurantName)
    }

    render() {
        return (
            <form className="new-rest-form" onSubmit={this.handleSubmit}>
                <input type="text" placeholder="Restaurant Name" required onChange={this.handleNameChange}/>
                <input type="number" min="1" max="5" placeholder="Rating" required onChange={this.handleRatingChange}/>
                <button>SUBMIT</button>
            </form>
        );
    }

}

export default RestaurantForm;
