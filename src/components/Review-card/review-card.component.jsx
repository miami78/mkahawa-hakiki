import React from 'react';
import 'antd/dist/antd.css';
import { Rate } from 'antd';
import './review-card.styles.scss';

const ReviewCard = () => {
  return (
    <div className="review-card">
        <h3>Filter by rating :</h3>
        <Rate allowHalf defaultValue={2.5}/>
    </div>
  );
}

export default ReviewCard;
