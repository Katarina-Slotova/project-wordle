import React from 'react'

import { sample } from '../../utils'
import { WORDS } from '../../data'
import GuessWord from '../GuessWord'
import PreviousGuesses from '../PreviousGuesses'
import GameOver from '../GameOver/GameOver'

// Pick a random word on every pageload.
const answer = sample(WORDS)
// To make debugging easier, we'll log the solution in the console.
console.info({ answer })

function Game() {
  const [previousWords, setPreviousWords] = React.useState([])
  const [gameStatus, setGameStatus] = React.useState('')

  function handleGuessList(guess) {
    setPreviousWords([...previousWords, guess])
    if (answer === guess) {
      setGameStatus('win')
    } else if (previousWords.length >= 5 && answer !== guess) {
      setGameStatus('lose')
    }
  }

  return (
    <>
      <PreviousGuesses previousWords={previousWords} answer={answer} />
      {gameStatus !== '' ? (
        <GameOver
          gameStatus={gameStatus}
          answer={answer}
          numOfGuesses={previousWords.length}
        />
      ) : (
        <GuessWord handleGuessList={handleGuessList} />
      )}
    </>
  )
}

export default Game
