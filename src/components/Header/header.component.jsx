import React from 'react';
import './header.styles.scss';


//Pass a function ref as props to trigger a function to the parent component
const Header= ()=> {
    return (
        <div className="header">
            <div className="logo-container"><h1>MH</h1></div>
        </div>
    );
    
}
  export default Header;