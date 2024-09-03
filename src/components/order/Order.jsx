import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import items from '../home/db.json';
import './Order.css';
import { Rating } from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';

function Order({ setCartItems }) {
  const [liked, setLiked] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const navigate = useNavigate();

  const increase = () => {
    if (quantity < 10) {
      setQuantity(quantity + 1);
    }
  };

  const decrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const { id } = useParams();
  const detail = items.items.find((item) => item.id === id);

  const toggleLike = () => {
    setLiked(!liked);
  };

  const addToCart = () => {
    const itemToAdd = { ...detail, quantity };
    setCartItems((prevItems) => [...prevItems, itemToAdd]);
    navigate('/cart'); 
  };

  return (
    <div className="order-page">
      <img className="order-img" src={detail.image} alt={detail.label} />
      <div className="order-details">
        <h1 className="order-label">{detail.label}</h1>
        <p className="order-description">{detail.description}</p>
        <div className="order-price-rating">
          <p className="order-price">${detail.price}</p>
          <Rating className="order-rating" name="read-only" value={detail.rating} readOnly />
        </div>
        <p style={{ marginLeft: '40px', color: 'grey' }}>Hurry up! Only few left in stock.</p>
        <hr />
        <div className="quantity">
          <p>Quantity:</p>
          <div className="count">
            <button onClick={decrease}>-</button>
            <p style={{ fontSize: '15px' }}>{quantity}</p>
            <button onClick={increase}>+</button>
          </div>
        </div>
        <div className="buy">
          <button className="buy-now">Buy it now</button>
          <button className="add-cart" onClick={addToCart}>
            Add to Cart
          </button>
          <div className="favorite-icon" onClick={toggleLike}>
            {liked ? (
              <FavoriteIcon style={{ color: 'red', width: '50px', height: '50px', marginTop: '5px' }} />
            ) : (
              <FavoriteBorderIcon style={{ width: '50px', height: '50px', marginTop: '5px' }} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Order;
