import React from 'react'

function Banner({ status, handler, children }) {
  return (
    <div className={`${status} banner`}>
      {children}
      {
        <button className='restart' onClick={handler}>
          Restart game 🔄
        </button>
      }
    </div>
  )
}

export default Banner
