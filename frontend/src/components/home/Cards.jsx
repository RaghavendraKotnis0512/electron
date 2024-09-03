import React from 'react';
import './Cards.css';
import { Rating } from '@mui/material'; 
import { Link } from 'react-router-dom';

function Cards(props) {
  return (
    <div>
      <p className="subtitle1">Popular Products</p>
      <div className="cards">
        {props.items.map((item, index) => (
          <Link to={`/order/${item.id}`} className="card" key={index}>
            <img src={item.image} alt={item.label} />
            <p className="label">{item.label}</p>
            <p className="price">${item.price}</p>
            <Rating name='read-only' value={item.rating} readOnly />
         
          </Link>
        ))}
      </div>
    </div>
  );
}
export default Cards;



