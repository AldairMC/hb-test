import React, { useContext } from 'react'
import AppContext from '../../context/AppContext'

const Names = ({ info }) => {
  const { names, handleInfo } = useContext(AppContext)

  const handleName = (e) => {
    const { value, name } = e.target
    handleInfo(value, name)
  }

  return (
    <div>
      <h1>{info.code}</h1>
      <p>{info.descripcion}</p>
      <input 
        type="text"
        value={names}
        name={info.nameState}
        placeholder={info.name}
        onChange={handleName}
      />
    </div>
  )
}

export default Names;