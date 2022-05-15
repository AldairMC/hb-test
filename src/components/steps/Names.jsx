import React, { useContext } from 'react'
import AppContext from '../../context/AppContext'

const Names = ({ info }) => {
  const { names, handleInfo } = useContext(AppContext)

  const handleName = (e) => {
    const { value, name } = e.target
    handleInfo(value, name)
  }

  return (
    <div className='Names'>
      <h1 className='H1_Names_Title'>{info.code}</h1>
      <p className='P_Names_Description'>{info.descripcion}</p>
      <input 
        type="text"
        className='Input_Names_Value'
        value={names}
        name={info.nameState}
        placeholder={info.name}
        onChange={handleName}
      />
    </div>
  )
}

export default Names;