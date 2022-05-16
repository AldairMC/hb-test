import React from 'react'

const Description = () => {
  return (
    <div className='Description'>
      <div className='Div_Description_Title'>
        Instrucciones
      </div>
      <div className='Div_Description_Text'>
        Para completar el resumen se deben llenar todos los campos de manera satisfactoria y cumpliendo todos los requisitos.
      </div>
      <div className='Div_Description_Text'>
        En la sección inferior se podrá evidenciar el avance de la información, del mismo modo puedes navegar entre pasos, haciendo click en cada una de las opciones ahí establecidas, también se podrá avanzar dónde click en los botones de <strong>Next</strong> and <strong>Prev</strong>, respectivamente.
      </div>
      <div className='Div_Description_Text'>
        Al final para validar los datos se debe hacer click en el botón <strong>Validar</strong>, la cual se encuentra en la parte inferior derecha de la sección de resumen.
      </div>
    </div>
  )
}

export default Description;