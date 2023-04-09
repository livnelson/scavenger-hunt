import React from 'react'
import GameCard from './GameCard'
import '../styles/GamePage.css'

function GamePage() {
  return (
    <div className='game-page'>
      <div className='game-modal'>
        <h2>Welcome Player</h2>
      <GameCard />
      </div>
    </div>
  )
}

export default GamePage