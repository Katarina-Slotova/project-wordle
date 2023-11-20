import React from 'react'
import Guess from '../Guess'

function PreviousGuesses({ previousWords }) {
  return (
    <div className='guess-results'>
      {previousWords.map(({ value, id }) => (
        <p key={id} className='guess'>
          <Guess value={value} />
        </p>
      ))}
    </div>
  )
}

export default PreviousGuesses
