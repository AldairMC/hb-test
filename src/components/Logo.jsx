import React from 'react'
import { Link } from 'react-router-dom';

// Constants
import { IMG_LOGO } from '../constants/constants';

const Logo = () => {
  return (
    <div className='Logo'>
      <Link to={"/"}>
        <img 
            src={IMG_LOGO}
            alt="Logo" 
            className='Img_Logo'
            width={70}
            height={70}
        />
      </Link>
    </div>
  )
}

export default Logo;
