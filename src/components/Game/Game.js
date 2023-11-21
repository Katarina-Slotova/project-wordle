import React from 'react'

import { sample } from '../../utils'
import { WORDS } from '../../data'
import GuessWord from '../GuessWord'
import PreviousGuesses from '../PreviousGuesses'
import { NUM_OF_GUESSES_ALLOWED } from '../../constants'
import WinningBanner from '../WinningBanner/WinningBanner'
import LosingBanner from '../LosingBanner/LosingBanner'

// Pick a random word on every pageload.
const answer = sample(WORDS)
// To make debugging easier, we'll log the solution in the console.
console.info({ answer })

function Game() {
  const [previousWords, setPreviousWords] = React.useState([])
  const [gameStatus, setGameStatus] = React.useState('')

  function handleGuessList(guess) {
    const nextPreviousWords = [...previousWords, guess]
    setPreviousWords(nextPreviousWords)
    if (answer === guess) {
      setGameStatus('win')
    } else if (nextPreviousWords.length >= NUM_OF_GUESSES_ALLOWED) {
      setGameStatus('lose')
    }
  }

  return (
    <>
      <PreviousGuesses previousWords={previousWords} answer={answer} />
      <GuessWord handleGuessList={handleGuessList} gameStatus={gameStatus} />
      {gameStatus === 'win' && <WinningBanner numOfGuesses={previousWords.length} />}
      {gameStatus === 'lose' && <LosingBanner answer={answer} />}
    </>
  )
}

export default Game
