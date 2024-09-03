import React from 'react'
import review from './customer.json'
import './CustomerFeedback.css'

function CustomerFeedback() {
  return (
    <div className='comment'>
      {review.map((data,index)=>(
        <div key={index} className='each-comment'>
        <div className='img-name'>
        <div className='pfp'>
            <img src={data.image} alt={data.customer_name}/>
        </div>
        
        <h2 style={{marginLeft:'50px', marginTop:'40px', fontSize:'30px'}}>{data.customer_name}</h2></div>
        <p style={{height:'auto', width:'auto', textAlign:'center', marginLeft:'15px', background:'#E2F4FF', borderRadius:'10px', marginTop:'20px', fontSize:'15px'}}>{data.comment}</p>
        
        </div>
      ))}
    </div>
  )
}

export default CustomerFeedback;
