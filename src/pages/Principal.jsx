import React from 'react'

// Components
import Logo from '../components/Logo';
import Stepper from '../components/Stepper';
import Info from '../components/Info';

const Principal = () => {
  return (
    <div className='Div_Principal'>
        <div className='Div_Navbar'>
            <Logo />
            <div className='Div_Modal'>
                From Modal Active
            </div>
        </div>
        <div className='Div_Info_Resumen'>
            <div className='Div_Info'>
                <Info />
            </div>
            <div className='Div_Resumen'>
                From Resumen
            </div>
        </div>
        <div className='Div_Steps'>
            <Stepper />
        </div>
    </div>
  )
}

export default Principal;

