import React, { useState } from 'react'
import RiddleHint from '../components/RiddleHint'
import '../styles/TryAgain.css'

function TryAgain({ gameBody, answer, setAnswer, tryAgain, setTryAgain }) {
  // const API_URL = process.env.REACT_APP_PHP_URL
  // const [errors, setErrors] = useState([])
  const [riddleHint, setRiddleHint] = useState(false)

  function handleRiddleHint() {
    setRiddleHint(!riddleHint)
  }

  function handleBackToRiddle() {
    setAnswer('')
    setTryAgain(!tryAgain)
  }
  
  return (
    <div className='try-again-page'>
      <div className='try-again-modal'>
        <h4 className='try-again-header'>Try Again</h4>
        <p className='try-again-card-body'>{gameBody.question ? gameBody.question : gameBody}</p>
        {gameBody.image ? <img className='game-image' src={gameBody.image} alt='riddle' /> : null}
        {gameBody.question_image ? <img className='game-image' src={gameBody.question_image} alt='question-riddle' /> : null}
        <h3 className='try-again-subheader'>You Entered:</h3>
        <p>"{answer}"</p>
        <h3 className='try-again-subheader'>Feeling Stuck?</h3>
        <button className='button' onClick={handleRiddleHint}>Reveal Hint</button>
        <div className='riddle-hint'>
        { riddleHint ? <RiddleHint gameBody={gameBody} /> : null }
        </div>
        <h3 className='try-again-subheader'>Ready to Try Again?</h3>
        <button className='button' onClick={handleBackToRiddle}>Back to Riddle</button>
      </div>
    </div>
  )
}

export default TryAgain