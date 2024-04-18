import React from 'react'
import './filter.scss';

const Filter = () => {
  return (
    <div className='filter'>
       <div className="top">
        <h2>Search for location <b>London</b></h2>
        <div className="item">
            <label htmlFor="city">Location</label>
            <input type="text" placeholder='City Name' name='city' id='city' />
        </div>
       </div>
       <div className="bottom">
       <div className="item">
            <label htmlFor="type">Type</label>
           <select name="type" id="type">
           <option value="">Any</option>
            <option value="buy">Buy</option>
            <option value="rent">Rent</option>
           </select>
        </div>
        <div className="item">
            <label htmlFor="property">Property</label>
            <select name="property" id="property">
                <option value="">Any</option>
                <option value="appartment">Appartment</option>
                <option value="land">Land</option>
                <option value="condo">Condo</option>
                <option value="house">House</option>
            </select>
        </div>
        <div className="item">
            <label htmlFor="minPrice">Min Price</label>
            <input type="number" placeholder='Any' name='minPrice' id='minPrice' />
        </div>
        <div className="item">
            <label htmlFor="maxPrice">Max Price</label>
            <input type="number" placeholder='Any' name='maxPrice' id='maxPrice' />
        </div>
        <div className="item">
            <label htmlFor="bedRoom">Bed Room</label>
            <input type="text" placeholder='Any' name='bedRoom' id='bedRoom' />
        </div>
        <button>
            <img src="./search.png" alt="" />
        </button>
       </div>
    </div>
  )
}

export default Filter
