import React, { useContext } from 'react'
import AppContext from '../../context/AppContext'

const Email = ({ info, changeInfo }) => {
  const { email } = useContext(AppContext)

  return (
    <div className='Email'>
      <h1 className='H1_Email_Title'>{info.code}</h1>
      <p className='P_Email_Description'>{info.descripcion}</p>
      <input 
        type="email"
        className='Input_Email_Value'
        value={email}
        name={info.nameState}
        placeholder={info.name}
        onChange={changeInfo}
      />
    </div>
  )
}

export default Email;