import React, { useContext } from 'react'
import AppContext from '../context/AppContext';

const Resumen = () => {
    const { names } = useContext(AppContext)

    return (
        <div className='Resumen'>
            <h1 className='H1_Resumen_Title'>Resumen</h1>
            <span className='Span_Resumen_Name'>
                {
                    (names !== "")? <>
                        <i className="fa-solid fa-user"></i> {names}
                    </> : <></>
                }
            </span>
        </div>
    )
}

export default Resumen;
