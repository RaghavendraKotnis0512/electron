import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/home/Home';
import Cart from './components/cart/Cart';
import Navbar from './components/home/Navbar';
import Footer from './components/home/Footer';
import Order from './components/order/Order';

function App() {
  const [cartItems, setCartItems] = useState([]);

  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart cartItems={cartItems} />} />
          <Route path="/order/:id" element={<Order setCartItems={setCartItems} />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
