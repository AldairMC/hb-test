import React, { useContext } from 'react'
import AppContext from '../../context/AppContext'

import Pagination from '../Pagination'

const Names = ({ info, changeInfo }) => {
  const { names } = useContext(AppContext)

  return (
    <div className='Names' data-testid="names">
      <h1 className='H1_Names_Title'>{info.code}</h1>
      <p className='P_Names_Description'>{info.descripcion}</p>
      <input 
        type="text"
        className='Input_Names_Value'
        value={names || ""}
        name={info.nameState}
        placeholder={info.name}
        onChange={changeInfo}
      />
      <Pagination 
        prev={info.prev}
        next={info.next}
      />
    </div>
  )
}

export default Names;