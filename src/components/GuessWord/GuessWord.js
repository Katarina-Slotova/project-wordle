import React from 'react'

function GuessWord() {
  const [guessedWord, setGuessedWord] = React.useState('')

  function handleSubmit(event) {
    if (guessedWord.length !== 5) {
      window.alert('The word must have exactly 5 letters!')
      return
    }
    event.preventDefault()
    console.log({ guess: guessedWord })
    setGuessedWord('')
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className='guess-input-wrapper'>
        <label htmlFor='guess-input'>Enter guess:</label>
        <input
          type='text'
          id='guess-input'
          value={guessedWord}
          onChange={(event) => setGuessedWord(event.target.value.toUpperCase())}
        ></input>
      </form>
    </div>
  )
}

export default GuessWord
