import React, { useContext } from 'react'
import AppContext from '../context/AppContext';
import Resumen from './Resumen';

const Modal = () => {
    const { isOpen, handleModalActived } = useContext(AppContext)

    return isOpen? (
        <div className='Modal'>
            <div className='Div_Modal_Contenido'>
                <div className='Div_Modal_Close'>
                    <span onClick={() => handleModalActived(!isOpen)}>X</span>
                </div>
                <Resumen />
            </div>
        </div>
    ) : null
}

export default Modal;
