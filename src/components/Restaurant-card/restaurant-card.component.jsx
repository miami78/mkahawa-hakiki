import React from 'react';
import 'antd/dist/antd.css';
import { Rate } from 'antd';

import './restaurant-card.styles.scss';

class RestaurantCard extends React.Component {
    constructor () {
        super()
        this.state = {
            restaurants:[],
        };
    }
    componentDidMount() {
        fetch('/data/api.json')
            .then(res => res.json())
            .then(res => this.setState({ restaurants:res.data}))
    }
    render(){
        console.log(this.state.restaurants)
        return (
            <div className="restaurant-list">
                <div className="section-divider-bottom-line"></div>
                <div className= "section">
                    <div className="section-header">
                        <h3>Kilimanjaro Food Court</h3>
                        <span><Rate disabled defaultValue={2.5}/></span>
                    </div>
                    <div className="section-details">
                        <p>$Restaurant · Teachers Service Commission, Woodley/Kenyatta Golf Course Kilimanjaro
                        Closing soon: 12:00 · 0727 628707</p>
                    </div>
                </div>
                <div className="section-divider-bottom-line"></div>
                <div className= "section">
                    <div className="section-header">
                        <h3>Kilimanjaro Food Court</h3>
                        <span><Rate disabled defaultValue={2.5}/></span>
                    </div>
                    <div className="section-details">
                        <p>$Restaurant · Teachers Service Commission, Woodley/Kenyatta Golf Course Kilimanjaro
                        Closing soon: 12:00 · 0727 628707</p>
                    </div>
                </div>
                <div className="section-divider-bottom-line"></div>
                <div className= "section">
                    <div className="section-header">
                        <h3>Kilimanjaro Food Court</h3>
                        <span><Rate disabled defaultValue={2.5}/></span>
                    </div>
                    <div className="section-details">
                        <p>$Restaurant · Teachers Service Commission, Woodley/Kenyatta Golf Course Kilimanjaro
                        Closing soon: 12:00 · 0727 628707</p>
                    </div>
                </div>
                <div className="section-divider-bottom-line"></div>
                <div className= "section">
                    <div className="section-header">
                        <h3>Kilimanjaro Food Court</h3>
                        <span><Rate disabled defaultValue={2.5}/></span>
                    </div>
                    <div className="section-details">
                        <p>$Restaurant · Teachers Service Commission, Woodley/Kenyatta Golf Course Kilimanjaro
                        Closing soon: 12:00 · 0727 628707</p>
                    </div>
                </div>
                <div className="section-divider-bottom-line"></div>
                <div className= "section">
                    <div className="section-header">
                        <h3>Kilimanjaro Food Court</h3>
                        <span><Rate disabled defaultValue={2.5}/></span>
                    </div>
                    <div className="section-details">
                        <p>$Restaurant · Teachers Service Commission, Woodley/Kenyatta Golf Course Kilimanjaro
                        Closing soon: 12:00 · 0727 628707</p>
                    </div>
                </div>
                <div className="section-divider-bottom-line"></div>
                <div className= "section">
                    <div className="section-header">
                        <h3>Kilimanjaro Food Court</h3>
                        <span><Rate disabled defaultValue={2.5}/></span>
                    </div>
                    <div className="section-details">
                        <p>$Restaurant · Teachers Service Commission, Woodley/Kenyatta Golf Course Kilimanjaro
                        Closing soon: 12:00 · 0727 628707</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default RestaurantCard;
