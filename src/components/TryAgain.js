import React, { useState } from 'react'
import RiddleHint from '../components/RiddleHint'
import '../styles/TryAgain.css'

function TryAgain({ answer, setAnswer, tryAgain, setTryAgain }) {
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
        <h3 className='try-again-subheader'>You Entered:</h3>
        <p>"{answer}"</p>
        <h3 className='try-again-subheader'>Feeling Stuck?</h3>
        <button className='button' onClick={handleRiddleHint}>Reveal Hint</button>
        <div className='riddle-hint'>
        { riddleHint ? <RiddleHint /> : null }
        </div>
        <h3 className='try-again-subheader'>Ready to Try Again?</h3>
        <button className='button' onClick={handleBackToRiddle}>Back to Riddle</button>
      </div>
    </div>
  )
}

export default TryAgain