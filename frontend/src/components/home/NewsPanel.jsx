import React from 'react'
import './News.css'
import newsData from './news.json' 

function NewsPanel() {
  return (
    <div className='main-news'>
      {newsData.map((newsItem, index) => (
        <div key={index} className="news">
          <div className="news-item">
            <img src={newsItem.image} alt={newsItem.title} />
          </div>
          <div className="news-content">
            <h3>{newsItem.date}</h3>
            <h2>{newsItem.title}</h2>
            <p className='des'>{newsItem.description}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default NewsPanel
