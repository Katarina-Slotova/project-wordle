import React from 'react'

function GuessWord({ handleGuessList, gameStatus }) {
  const [tentativeGuess, setTentativeGuess] = React.useState('')

  function handleSubmit(event) {
    event.preventDefault()
    if (tentativeGuess.length !== 5) {
      window.alert('Please enter exactly 5 letters!')
      return
    }
    console.log({ guess: tentativeGuess })
    handleGuessList(tentativeGuess)
    setTentativeGuess('')
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className='guess-input-wrapper'>
        <label htmlFor='guess-input'>Enter guess:</label>
        <input
          required
          disabled={gameStatus !== ''}
          type='text'
          id='guess-input'
          value={tentativeGuess}
          onChange={(event) =>
            setTentativeGuess(event.target.value.toUpperCase())
          }
        ></input>
      </form>
    </div>
  )
}

export default GuessWord
