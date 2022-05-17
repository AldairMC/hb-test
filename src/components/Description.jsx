import React from 'react'
import Pagination from './Pagination';

const Description = ({ info }) => {
  return (
    <div className='Description' data-testid="description">
      <div className='Div_Description_Title'>
        Instrucciones
      </div>
      <div className='Div_Description_Text'>
        Para completar el resumen se deben llenar todos los campos de manera satisfactoria y cumpliendo todos los requisitos.
      </div>
      <div className='Div_Description_Text'>
        En la sección inferior se podrá evidenciar el avance de la información, del mismo modo puedes navegar entre pasos, haciendo click en cada una de las opciones ahí establecidas, también se podrá avanzar dónde click en los botones de <strong>Next</strong> and <strong>Prev</strong>, respectivamente.
      </div>
      <Pagination 
        prev={info.prev}
        next={info.next}
      />
    </div>
  )
}

export default Description;