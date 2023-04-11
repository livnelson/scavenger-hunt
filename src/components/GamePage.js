import React from 'react'
import GameCard from './GameCard'
import '../styles/GamePage.css'

function GamePage({ nickname }) {
  return (
    <div className='game-page'>
      <div className='game-modal'>
        <p className='game-page-top-header'>Monrovia Days Scavenger Hunt</p>
        <h2 className='game-page-header'>Welcome Player</h2>
        <p className='game-page-code'>Your Game Code: {nickname}</p>
      <GameCard />
      </div>
    </div>
  )
}

export default GamePage