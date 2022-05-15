import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const Principal = () => {
  return (
    <div className='Div_Principal'>
        <div className='Div_Navbar'>
            <div className='Div_Logo'>
                From Logo
            </div>
            <div className='Div_Modal'>
                From Modal Active
            </div>
        </div>
        <div className='Div_Info_Resumen'>
            <div className='Div_Info'>
                From Info
            </div>
            <div className='Div_Resumen'>
                From Resumen
            </div>
        </div>
        <div className='Div_Steps'>
            From Steps
        </div>
    </div>
  )
}

export default Principal;

