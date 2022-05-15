import React, { useContext } from 'react'
import AppContext from '../context/AppContext';

const Resumen = () => {
    const { names, email } = useContext(AppContext)

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
                        <i class="fa-solid fa-at"></i> {email}
                    </> : <></>
                }
            </span>
        </div>
    )
}

export default Resumen;
