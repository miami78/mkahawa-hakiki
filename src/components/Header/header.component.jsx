import React, {useState} from 'react';
import './header.styles.scss';
import RestaurantForm from '../Form/form.component';


//Pass a function ref as props to trigger a function to the parent component
const Header= ()=> {
    const [showForm, setshowForm] = useState(false);
    return (
        <div className="header">
            <div className="logo-container"><h1>MH</h1></div>
            
            <span onClick= {()=> setshowForm(!showForm)} className="custom-button">Add Restaurant</span>
            {showForm && <div><RestaurantForm /></div>}
        </div>
    );
    
}
  export default Header;