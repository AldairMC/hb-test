import React, { useContext } from 'react'
import AppContext from '../context/AppContext';

// Components
import Logo from '../components/Logo';
import Stepper from '../components/Stepper';
import Info from '../components/Info';
import Resumen from '../components/Resumen';
import Modal from "../components/Modal";

const Principal = () => {
    const { isOpen, handleModalActived } = useContext(AppContext)

    return (
        <div className='Div_Principal' data-testid="principal">
            <div className='Div_Navbar'>
                <Logo />
                <div className='Div_Modal'>
                    <i className="I_Modal_Button fa-solid fa-file" onClick={() => handleModalActived(!isOpen)}></i>
                    <Modal />
                </div>
            </div>
            <div className='Div_Info_Resumen'>
                <div className='Div_Info'>
                    <Info />
                </div>
                <div className='Div_Resumen'>
                    <Resumen />
                </div>
            </div>
            <div className='Div_Steps'>
                <Stepper />
            </div>
        </div>
    )
}

export default Principal;

