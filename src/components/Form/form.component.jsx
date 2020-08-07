import React from 'react';

import './form.styles.scss';

class RestaurantForm extends React.Component{
    constructor(props){
      super(props);
      this.state = {
        RestaurantName:'',
        address: '',
        lat:'',
        long:'',
      };
    }

    render() {
        return (
            <form className="form-container">
                <input type="text" placeholder="Restaurant Name"/>
                <input type="text" placeholder="Address"/>
                <input type="text" placeholder="Latitude"/>
                <input type="text" placeholder="Longitude"/>
                <button>SUBMIT</button>
            </form>
        );
    }

}

export default RestaurantForm;
