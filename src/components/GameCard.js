import React from 'react'
import '../styles/GameCard.css'

function GameCard() {
  return (
    <div className='game-card'>
      <h4 className='game-card-subheader'>Riddle:</h4>
      <p className='riddle-text'>Riddle</p>
      <h4 className='game-card-subheader'>Your Answer:</h4>
      <form>
        <textarea 
        type='text' 
        className='game-form'
        placeholder= 'Enter your answer here'

        />
        <button className='button'>Submit</button>
      </form>
    </div>
  )
}

export default GameCard