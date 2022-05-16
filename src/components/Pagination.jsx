import React from 'react'
import { Link } from 'react-router-dom';

const Pagination = ({ next, prev }) => {
  return (
    <div className='Pagination'>
        {
            (prev)? <div className='__Prev'><Link to={prev}><i className="fa-solid fa-angle-left"></i> {"Prev"}</Link></div> : <div></div>
        }
        {
            (next)? <div className='__Next'><Link to={next}>{"Next"} <i className="fa-solid fa-angle-right"></i></Link></div> : <div></div>
        }
    </div>
  )
}

export default Pagination;
