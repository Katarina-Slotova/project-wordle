import React from 'react'

import Banner from '../Banner/Banner'

function LosingBanner({ answer, handleRestart }) {
  return (
    <Banner status='sad' handler={handleRestart}>
      <p>
        Sorry, the correct answer is <strong>{answer}</strong>.
      </p>
    </Banner>
  )
}

export default LosingBanner
