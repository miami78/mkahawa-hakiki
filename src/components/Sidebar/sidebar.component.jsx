import React from 'react';
import ReviewCard from '../Review-card/review-card.component';
import RestaurantCard from '../Restaurant-card/restaurant-card.component';

import './sidebar.styles.scss';

class SideBar extends React.Component {
    render() {
        return (
            <div className="restaurant-card">
                <ReviewCard />
                <RestaurantCard />
            </div>
        );
    }
}

export default SideBar;