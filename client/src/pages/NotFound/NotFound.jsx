import React from 'react'
import './notfound.scss';
import { Link } from 'react-router-dom';
const NotFound = () => {
  return (
    <div className='notfoundPage'>
       <h1>404!</h1>
       <p>Oops! page not found</p>
       <Link to="/" className='backBtn'>Back to Home</Link>
    </div>
  )
}

export default NotFound
