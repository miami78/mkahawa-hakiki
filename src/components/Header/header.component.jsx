import React, {useState} from 'react';
import './header.styles.scss';
import RestaurantForm from '../Form/form.component';
import {ReactComponent as ReactLogo} from '../../assets/location-pin.svg';

//Pass a function ref as props to trigger a function to the parent component
const Header= ()=> {
    const [showForm, setshowForm] = useState(false);
    return (
        <div className="header">
            <div className="logo-container"><ReactLogo /></div>
            
            <h1>MKAHAWA HAKIKI</h1>
            <button onClick= {()=> setshowForm(!showForm)} className="custom-button">Add Restaurant</button>
            {showForm && <div><RestaurantForm /></div>}
        </div>
    );
    
}
  export default Header;