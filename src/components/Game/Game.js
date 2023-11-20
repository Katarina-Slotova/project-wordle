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
    const nextPreviousWords = {value: guess, id: crypto.randomUUID()}
    setPreviousWords([...previousWords, nextPreviousWords])
  }

  return (
    <>
      <PreviousGuesses previousWords={previousWords} />
      <GuessWord handleGuessList={handleGuessList} />
    </>
  )
}

export default Game
