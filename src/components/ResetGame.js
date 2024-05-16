import React from 'react'
import { useNavigate } from 'react-router-dom'
import '../styles/ResetGame.css'

function ResetGame({ resetGame, setResetGame, resetGameCode }) {

  const navigate = useNavigate()

  function handleReturnToGame() {
    setResetGame(!resetGame)
    navigate('/')
  }

  return (
    <div className='reset-modal'>
      <div className='reset-card'>
        <h3>Are you sure you want to reset your progress?</h3>
        <p>This cannot be undone</p>
        <button className='button' onClick={resetGameCode}>Reset Game</button>
        <br />
        <p></p>
        <button className='button' onClick={handleReturnToGame}>Return to Game</button>
      </div>
    </div>
  )
}

export default ResetGame