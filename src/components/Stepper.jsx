import React, { useContext, useState } from 'react'
import AppContext from '../context/AppContext'

import { Paths } from '../constants/paths'

import Options from './Options'

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
        <div className='Stepper' data-testid="stepper">
            {
                Links.map((info, key) => (
                    <div className='Options' key={key}>
                        <Options 
                            info={info} 
                            handlePatActive={handlePatActive}
                            data={data}
                            pathActived={pathActived}
                        />
                    </div>
                ))
            }
        </div>
    )
}

export default Stepper;


