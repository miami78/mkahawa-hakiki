import React from 'react';
import FilterCard from '../Filter-card/filter-card.component';
import RestaurantReviewCard from '../Restaurant-review-card/restaurant-review-card.component';

import './sidebar.styles.scss';

//pass in the name of a new function as props to the review card
//React pass function as props
class SideBar extends React.Component {
    render() {
        return (
            <div className="restaurant-card">
                <FilterCard />
                <RestaurantReviewCard />
            </div>
        );
    }
}

export default SideBar;