import React, { useContext } from 'react'
import AppContext from '../../context/AppContext'
import Pagination from '../Pagination'

const Email = ({ info, changeInfo }) => {
  const { email, isValid } = useContext(AppContext)

  return (
    <div className='Email' data-testid="email">
      <h1 className='H1_Email_Title'>{info.code}</h1>
      <p className='P_Email_Description'>{info.descripcion}</p>
      <div className='Div_Email_Container_Input'>
        <input 
          type="email"
          className='Input_Email_Value'
          value={email}
          name={info.nameState}
          placeholder={info.name}
          onChange={changeInfo}
        />
        {!isValid? <h6>* Correo no valido</h6> : null}
      </div>
      <Pagination 
        prev={info.prev}
        next={info.next}
      />
    </div>
  )
}

export default Email;