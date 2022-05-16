import React from 'react'
import NoFoundImage from "../assets/NoFound.png";

const NoFound = () => {
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
    </div>
  )
}

export default NoFound;
