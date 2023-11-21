import React from 'react'
import { range } from '../../utils'
import { checkGuess } from '../../game-helpers'

function Cell({ letter, status }) {
  return <span className={`cell ${status}`}>{letter}</span>
}

function Guess({ value, answer }) {
  const updatedTentativeGuess = checkGuess(value, answer)

  return (
    <>
      <p className='guess'>
        {range(5).map((num) => (
          <Cell
            key={num}
            letter={
              updatedTentativeGuess
                ? updatedTentativeGuess[num].letter
                : undefined
            }
            status={
              updatedTentativeGuess ? updatedTentativeGuess[num].status : ''
            }
          />
        ))}
      </p>
    </>
  )
}

export default Guess
