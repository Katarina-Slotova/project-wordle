import React from 'react'

function PreviousGuesses({ previousWords }) {
  return (
    <div className='guess-results'>
      {previousWords.map(({value, id}) => (
        <p key={id} className='guess'>{value}</p>
      ))}
    </div>
  )
}

export default PreviousGuesses
