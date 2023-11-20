import React from 'react'

function Guess({value}) {

  return (
    <>
      {Array.from(value).map(elem => ( 
        <span className='cell'>{elem}</span>
      ))}
    </>
  )
}

export default Guess
