import React from 'react'
import './Navbar.css'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div>
     <div className="top">
        <p>Need help? Call us: (+91) 1234567890</p>
        <p className="locate"><LocationOnIcon /> Our Store</p>
        <p className="delivery"><LocalShippingIcon /> Track your order</p>
      </div>
      <div className="search-bar">
        <Link to='/' className="title">Electron</Link>
        <input className="search" type="text" placeholder="Search any thing" />
        <input className="submit" type="submit" placeholder="search" />
        <div className="personal">
          <p><AccountCircleIcon /> Profile</p>
          <p><FavoriteIcon /> Favourite</p>
          <Link to='/Cart'><ShoppingCartIcon/>Cart</Link>
        </div>
      </div>
    <div className="navbar">
    <select className="categories">
        <option>Browse Categories</option>
        <option>Camera</option>
        <option>Laptop</option>
    </select>
    </div>
    </div>
  )
}

export default Navbar
