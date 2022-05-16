import React from 'react'
import NoFoundImage from "../assets/NoFound.png";
import Pagination from './Pagination';

const NoFound = ({ info }) => {
  return (
    <div className='NoFound'>
      <div className='Div_NoFound'>
        <img 
          className='Img_NoFound' 
          src={NoFoundImage} 
          alt="404"
        />
        <h4 className='H4_NoFound_Title'>404 not found</h4>
      </div>
      <Pagination 
        prev={info.prev}
        next={info.next}
      />
    </div>
  )
}

export default NoFound;
