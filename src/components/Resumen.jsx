import React, { useContext } from 'react'
import AppContext from '../context/AppContext';

const Resumen = () => {
    const { names, email, address, floor } = useContext(AppContext)

    return (
        <div className='Resumen'>
            <h1 className='H1_Resumen_Title'>Resumen</h1>
            <span className='Span_Resumen_Item'>
                {
                    (names)? <>
                        <i className="fa-solid fa-user"></i> {names}
                    </> : <></>
                }
            </span>
            <span className='Span_Resumen_Item'>
                {
                    (email)? <>
                        <i className="fa-solid fa-at"></i> {email}
                    </> : <></>
                }
            </span>
            <span className='Span_Resumen_Item'>
                {
                    (address)? <>
                        <i className="fa-solid fa-map-location-dot"></i> {address}
                    </> : <></>
                }
            </span>
            <span className='Span_Resumen_Item'>
                {
                    (floor)? <>
                        <i className="fa-solid fa-hotel"></i> Piso: {floor}
                    </> : <></>
                }
            </span>
        </div>
    )
}

export default Resumen;
