import React from 'react'

// Constants
import { IMG_LOGO } from '../constants/constants';

const Logo = () => {
  return (
    <div className='Logo'>
        <img 
            src={IMG_LOGO}
            alt="Logo" 
            className='Img_Logo'
            width={70}
            height={70}
        />
    </div>
  )
}

export default Logo;
