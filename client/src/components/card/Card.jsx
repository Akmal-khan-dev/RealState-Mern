import React from 'react'
import './card.scss';
import { Link } from 'react-router-dom';

const Card = ({ item }) => {

  return (
    <div className='card'>
      <div className="imageContainer">
        <Link to={`/${item.id}`}>
          <img src={item.images} alt="" />
        </Link>
      </div>
      <div className="textContainer">
        <h2 className="title">
          {item.title}
        </h2>
        <p className="address">
          <img src="/pin.png" alt="" />
          <span>{item.address}</span>
        </p>
        <p className="price">$ {item.price}</p>
        <div className="bottom">
          <div className="features">
            <div className="feature">
              <img src="/bed.png" alt="" />
              <span>{item.bedroom} Bedrooms</span>
            </div>
            <div className="feature">
              <img src="/bed.png" alt="" />
              <span>{item.bathromm} Bathroom</span>
            </div>
          </div>
          <div className="icons">
          <div className="icon">
            <img src="/save.png" alt="" />
          </div>
          <div className="icon">
            <img src="/chat.png" alt="" />
          </div>
        </div>
        </div>
        
      </div>
    </div>
  )
}

export default Card
