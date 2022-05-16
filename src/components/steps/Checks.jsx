import React, { useContext } from 'react'
import AppContext from '../../context/AppContext'
import Pagination from '../Pagination'

const Checks = ({ info }) => {
  const {  handlePerks } = useContext(AppContext)

  const handleChecks = (e) => {
    const checks = document.getElementsByName("perks")
    
    const result = []

    for (let i = 0; i < checks.length; i++) {
      if (checks[i].checked) {
        result.push({ name: checks[i].value, check: checks[i].checked })
      }
    }

    if(result.length === 0){
      handlePerks(null)
    } else {
      handlePerks(result)
    }
  }

  return (
    <div className='Checks'>
      <h1 className='H1_Checks_Title'>{info.code}</h1>
      <p className='P_Checks_Description'>{info.descripcion}</p>
      <div className='Div_Check_Container'>
        <div className='Div_Check'>
          <input 
            className='Input_Check' 
            type="checkbox" 
            name="perks" 
            value="zona_bbq" 
          />
          <label>Zona BBQ</label>
        </div>
        <div className='Div_Check'>
          <input 
            className='Input_Check' 
            type="checkbox" 
            name="perks" 
            value="salon_comunal"
          />
          <label>Sálon comunal</label>
        </div>
        <div className='Div_Check'>
          <input 
            className='Input_Check' 
            type="checkbox" 
            name="perks" 
            value="parques_de_juegos"
          />
          <label>Parque de juegos</label>
        </div>
        <button className='Button_Checks' onClick={handleChecks}>
          <i className="fa-solid fa-plus"></i> Valid
        </button>
      </div>
      <Pagination 
        prev={info.prev}
        next={info.next}
      />
    </div>
  )
}

export default Checks;


