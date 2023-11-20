import React from 'react'

function GuessWord() {
  const [guessedWord, setGuessedWord] = React.useState('')

  function handleSubmit(event) {
    event.preventDefault()
    if (guessedWord.length !== 5) {
      window.alert('Please enter exactly 5 letters!')
      return
    }
    console.log({ guess: guessedWord })
    setGuessedWord('')
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className='guess-input-wrapper'>
        <label htmlFor='guess-input'>Enter guess:</label>
        <input
          required
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
