import React, { useContext } from 'react'
import AppContext from '../../context/AppContext'

const Floor = ({ info, changeInfo }) => {
  const { floor } = useContext(AppContext)

  return (
    <div className='Floor'>
      <h1 className='H1_Floor_Title'>{info.code}</h1>
      <p className='P_Floor_Description'>{info.descripcion}</p>
      <input 
        type="number"
        max={5}
        min={1}
        className='Input_Floor_Value'
        value={floor}
        name={info.nameState}
        placeholder={info.name}
        onChange={changeInfo}
      />
    </div>
  )
}

export default Floor;