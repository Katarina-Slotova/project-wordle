import React from 'react'

import { sample } from '../../utils'
import { WORDS } from '../../data'
import GuessWord from '../GuessWord'
import PreviousGuesses from '../PreviousGuesses'

// Pick a random word on every pageload.
const answer = sample(WORDS)
// To make debugging easier, we'll log the solution in the console.
console.info({ answer })

function Game() {
  const [previousWords, setPreviousWords] = React.useState([])

  function handleGuessList(guess) {
    setPreviousWords([...previousWords, guess])
  }

  return (
    <>
      <PreviousGuesses previousWords={previousWords} answer={answer} />
      <GuessWord handleGuessList={handleGuessList} />
    </>
  )
}

export default Game
