import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { Context } from '../contexts/Context'
import GameCard from './GameCard'
import Footer from './Footer'
import '../styles/GamePage.css'

function GamePage() {
  const { gameData } = useContext(Context)
  const navigate = useNavigate()

  return (
    <div className='game-page'>
      <div className='game-modal'>
        <p className='game-page-top-header'>Monrovia Days Scavenger Hunt</p>
        <h2 className='game-page-header'>Welcome Player</h2>
        {gameData.gamecode ? <p className='game-page-code'>Your Game Code: {gameData.gamecode}</p> : navigate('/')}
        <GameCard />
      </div>
      <Footer />
    </div>
  )
}

export default GamePage