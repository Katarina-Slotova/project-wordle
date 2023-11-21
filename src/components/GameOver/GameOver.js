import React from 'react'

function WinningBanner({numOfGuesses}) {
  return (
    <div className='happy banner'>
      <p>
        <strong>Congratulations!</strong> Got it in
        <strong> {numOfGuesses} guesses</strong>.
      </p>
    </div>
  )
}

function LosingBanner({ answer }) {
  return (
    <div className='sad banner'>
      <p>
        Sorry, the correct answer is <strong>{answer}</strong>.
      </p>
    </div>
  )
}

function GameOver({ gameStatus, answer, numOfGuesses }) {
  return (
    <>
      {gameStatus === 'win' ? (
        <WinningBanner numOfGuesses={numOfGuesses} />
      ) : (
        <LosingBanner answer={answer} />
      )}
    </>
  )
}

export default GameOver
