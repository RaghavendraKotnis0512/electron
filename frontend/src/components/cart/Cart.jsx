import React from 'react';
import './Cart.css';
import { Link } from 'react-router-dom';

function Cart({cartItems}) {
  const total=()=>{
    return cartItems.reduce((sum,item)=>sum+item.price*item.quantity,0);
  }
  return (
    <div>
    <div className="cart-page">
      <table className="cart-table">
        <thead>
          <tr>
            <th>Product</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Subtotal</th>
          </tr>
        </thead>
        {cartItems.length===0 ? (<p style={{color:'grey', fontSize:'20px'}}>You have no products in your cart</p>):
        (<tbody className='cart-body'>
         {cartItems.map((item,index)=>(
          <tr key={index}>
            <td><img src={item.image} alt={item.label} className='cart-img'/></td>
            <td>${item.price}</td>
            <td className='cart-count'>{item.quantity}</td>
            <td>${(item.price*item.quantity).toFixed(2)}</td>
          </tr>
          
         ))}
        </tbody>)}
      </table>
      <div className='checkout'>
      <div className='checkout-title'>
         <p>Cart Total</p></div>
         
         <div className='subtotal'>
         <p>Subtotal</p>
         <p>${total().toFixed(2)}</p>
         </div>
         <hr className='line'/>
         <div className='coupon'>
          <input placeholder='Enter coupon code'/>
         </div>
         <hr className='line'/>
         <button className='final'>Proceed to checkout</button>
         </div>
      </div>
     
      
      <Link to='/'><button className='con-shop'>Continue shopping</button></Link>
      </div>
  );
}

export default Cart;
