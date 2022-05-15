import React, { useContext } from 'react'
import AppContext from '../context/AppContext'
import { Link } from 'react-router-dom'

import { Paths } from '../constants/paths'

const Stepper = () => {
    const { data } = useContext(AppContext)
    const Links = Paths.filter(info => info.visible)

    return (
        <div className='Stepper'>
            {
                Links.map((info) => (
                    <div className='Options'>
                        {
                            <Link to={info.path} className={`${(data[info.nameState] === "")?"__empty_title" : "__full_title"}`}>
                                {
                                    (data[info.nameState] === "")? <i className={`${info.icon} __empty_stepper`}></i> : <i className="fa-solid fa-circle-check __full_stepper"></i>
                                } {info.name}
                            </Link>
                        }
                    </div>
                ))
            }
        </div>
    )
}

export default Stepper;


