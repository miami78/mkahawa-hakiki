import React from 'react';
import './header.styles.scss';
import {ReactComponent as ReactLogo} from '../../assets/location-pin.svg';

class Header extends React.Component {
    state = {
        latitude: 0,
        longitude: 0,
        city: null,
        country: null
    }

    componentDidMount = () => {
        // Get position of user
        
    }
    render() {
        return (
            <div className="header">
                <div className="logo-container"><ReactLogo /></div>
                <div className="geo-info">{this.state.city}{this.state.country}Nairobi,Kenya</div>
                <h1>MKAHAWA HAKIKI</h1>
                <button className="custom-button">Add Restaurant</button>
            </div>
        );
    } 
}
  
  export default Header;