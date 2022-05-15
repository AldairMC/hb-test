import React, { useContext } from 'react'
import AppContext from '../../context/AppContext'

const Address = ({ info, changeInfo }) => {
  const { address } = useContext(AppContext)

  return (
    <div className='Address'>
      <h1 className='H1_Address_Title'>{info.code}</h1>
      <p className='P_Address_Description'>{info.descripcion}</p>
      <input
        type="text"
        className='Input_Address_Value'
        value={address}
        name={info.nameState}
        placeholder={info.name}
        onChange={changeInfo}
      />
    </div>
  )
}

export default Address;
