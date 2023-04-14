import React, { useContext } from 'react'
import { Context } from '../contexts/Context'
import '../styles/GameCard.css'

function GameCard() {
  const { gameData, answer, setAnswer, submitAnswer } = useContext(Context)

  return (
    <div className='game-card'>
      <h4 className='game-card-subheader'>Riddle:</h4>
      <p className='game-card-body'>{gameData.body.question ? gameData.body.question : gameData.body}</p>
      {gameData.image ? <img className='game-image' src={gameData.image} alt='riddle' /> : null}
      {gameData.body.question_image ? <img className='game-image' src={gameData.body.question_image} alt='riddle' /> : null}
      <h4 className='game-card-subheader'>Your Answer:</h4>
      <form onSubmit={submitAnswer}>
        <input
          type='text'
          value={answer}
          className='game-form'
          placeholder='Enter your answer here'
          onChange={(e) => { setAnswer(e.target.value) }}
        />
        <button className='button'>Submit</button>
      </form>
      <br />
    </div>
  )
}

export default GameCard