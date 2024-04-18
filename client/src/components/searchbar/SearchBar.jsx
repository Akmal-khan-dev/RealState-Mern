import { useState } from 'react'
import './searchbar.scss'

const types = ["buy", "rent"]
const SearchBar = () => {
  const [querry, setQuerry] =useState({
    type:"buy",
    location: "",
    minPrice:"",
    maxPrice:""
  })
  const switchType = (val)=>{
    setQuerry((prev)=>({...prev, type:val}))
  }
  return (
    <div className='search'>
      <div className="type">
         {
          types.map((type)=>(
            <button key={type} onClick={()=>switchType(type)} className={querry.type == type ? "active" : ""} >{type}</button>
          ))
         }
       
      </div>
      <form action="">
        <input type="text" name='location' placeholder='City Location' />
        <input type="number" name='min_price' min={0} max={100000} placeholder='Enter minimum price' />
        <input type="number" name='max_price' min={0} max={100000} placeholder='Enter maximum price' />
        <button>
          <img src="/search.png" alt="" />
        </button>
      </form>
    </div>
  )
}

export default SearchBar
