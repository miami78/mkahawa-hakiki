import React from 'react';
import './header.styles.scss';
import {ReactComponent as ReactLogo} from '../../assets/location-pin.svg';

const Header = () => {
    return (
        <div className="header">
            <div className="logo-container"><ReactLogo /></div>
            <div className="geo-info">Nairobi,Kenya</div>
            MKAHAWA HAKIKI
            <button className="custom-button">Add Restaurant</button>
        </div>
    );
}
  
  export default Header;