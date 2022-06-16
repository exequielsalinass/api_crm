import React from 'react'

function Alerta({children}) {
  return (
    <div className='text-center my-4 text-red-600 font-bold'>
        {children}
    </div>
  )
}

export default Alerta