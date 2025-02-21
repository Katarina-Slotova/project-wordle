import React from 'react'

import Banner from '../Banner/Banner'

function WinningBanner({ numOfGuesses, handleRestart }) {
  return (
    <Banner status='happy' handler={handleRestart}>
      <p>
        <strong>Congratulations!</strong> Got it in{' '}
        <strong>
          {numOfGuesses === 1 ? '1 guess' : `${numOfGuesses} guesses`}
        </strong>
        .
      </p>
    </Banner>
  )
}

export default WinningBanner
