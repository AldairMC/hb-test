import React, { useContext } from 'react'
import AppContext from '../context/AppContext';
import { stylePerksName } from "../utils/helper";

const Resumen = () => {
    const { names, email, address, floor, perks } = useContext(AppContext)

    return (
        <div className='Resumen' data-testid="resumen">
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
            <span className='Span_Resumen_Item'>
                {
                    (perks)? <>
                        <h4 className='H5_Resumen_Item'>Beneficios</h4>
                        {
                            perks.map(i => (
                                <div className='Span_Resumen_Perks'><i className="fa-regular fa-circle-dot"></i> {stylePerksName(i.name)}</div>
                            ))
                        }
                    </> : <></>
                }
            </span>
        </div>
    )
}

export default Resumen;
