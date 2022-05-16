import React from 'react'
import { Link } from 'react-router-dom';

const Options = ({ info, handlePatActive, data, pathActived }) => {
  return (
    <>
        <Link to={info.path} onClick={() => handlePatActive(info.path)} className={`${!(data[info.nameState])?"__empty_title" : "__full_title"}`}>
            {
                !(data[info.nameState])? <i className={`${info.icon} __empty_stepper`}></i> : <i className="fa-solid fa-circle-check __full_stepper"></i>
            } <span className={`${pathActived[info.path]? "Span_Stepper_Name" : ""}`}>{info.name}</span>
        </Link>
    </>
  )
}

export default Options;
