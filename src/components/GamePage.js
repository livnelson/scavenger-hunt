import React from 'react'
import { useNavigate } from 'react-router-dom'
import GameCard from './GameCard'
import '../styles/GamePage.css'

function GamePage({ gameCode, setGameCode, gameData, gameBody, setGameBody, updatedGameData, setUpdatedGameData }) {

  const navigate = useNavigate()

  return (
    <div className='game-page'>
      <div className='game-modal'>
        <p className='game-page-top-header'>Monrovia Days Scavenger Hunt</p>
        <h2 className='game-page-header'>Welcome Player</h2>
        {gameCode ? <p className='game-page-code'>Your Game Code: {gameCode}</p> : navigate('/')}
        <GameCard
          gameCode={gameCode}
          gameBody={gameBody}
          setGameBody={setGameBody}
          setUpdatedGameData={setUpdatedGameData}
        />
      </div>
    </div>
  )
}

export default GamePage