import React, { useContext, useState } from 'react'
import AppContext from '../context/AppContext'
import { Link } from 'react-router-dom'

import { Paths } from '../constants/paths'

const Stepper = () => {
    const initialState = {
        "/nombre-completo": false,
        "/email": false,
        "/direccion-apartamento": false,
        "/numero-pisos": false,
        "/beneficios": false
    }

    const [ pathActived, setPathAtived ] = useState(initialState)
    const { data } = useContext(AppContext)
    const Links = Paths.filter(info => info.visible)

    const handlePatActive = (path) => {
        const pathname = window.location.pathname
        const uriPath = !pathActived[path] || pathname === path
        setPathAtived({
            [path]: uriPath
        })
    }
    
    return (
        <div className='Stepper'>
            {
                Links.map((info) => (
                    <div className='Options'>
                        {
                            <Link to={info.path} className={`${!(data[info.nameState])?"__empty_title" : "__full_title"}`}>
                                {
                                    !(data[info.nameState])? <i className={`${info.icon} __empty_stepper`}></i> : <i className="fa-solid fa-circle-check __full_stepper"></i>
                                } <span onClick={() => handlePatActive(info.path)} className={`${pathActived[info.path]? "Span_Stepper_Name" : ""}`}>{info.name}</span>
                            </Link>
                        }
                    </div>
                ))
            }
        </div>
    )
}

export default Stepper;


