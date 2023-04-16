import React from 'react'
import { useWindowSize } from 'react-use'
import Confetti from 'react-confetti'
import '../styles/GameOver.css'
import '../styles/Stats.css'

function GameOver({ gameCode, gameData }) {
  const { width, height } = useWindowSize()

  return (
    <div className='game-over'>
      <Confetti
        width={width}
        height={height}
        recycle={false}
        numberOfPieces={1000}
        gravity={0.03}
      />
      <div className='game-over-modal'>
        <h4 className='game-over-header'>Congratulations!</h4>
        <p className='prizes'>These local businesses are offering a special discount to those who have completed the Monrovia Days Scavenger Hunt:</p>
        <p className='prize'>Business One - %10 off</p>
        <p className='prize'>Business Two - %15 off</p>
        <p className='prize'>Business Three - Buy 1 Get 1</p>
        <p className='prize'>Business Four - %10 off</p>
        <p className='prize'>Business Five - Free with purchase</p>
        <br />
        <h4>Player Stats</h4>
        <p className='game-over-stat'>Game Code: {gameCode}</p>
        <p className='game-over-stat'>Rank: {gameData.player_ranking}</p>
        <p className='game-over-stat'>Total Time: {gameData.elapsed_time}</p>
      </div>
    </div>
  )
}

export default GameOver