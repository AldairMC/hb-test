import React, { useContext } from 'react'
import AppContext from '../../context/AppContext'
import Pagination from '../Pagination'

const Floor = ({ info, changeInfo }) => {
  const { floor } = useContext(AppContext)

  return (
    <div className='Floor' data-testid="floor">
      <h1 className='H1_Floor_Title'>{info.code}</h1>
      <p className='P_Floor_Description'>{info.descripcion}</p>
      <input 
        type="number"
        className='Input_Floor_Value'
        value={floor || ""}
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

export default Floor;