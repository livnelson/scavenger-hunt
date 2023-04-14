import React, { useContext } from 'react'
import { Context } from '../contexts/Context'
import { useWindowSize } from 'react-use'
import Confetti from 'react-confetti'
import '../styles/GameOver.css'
import '../styles/Stats.css'

function GameOver() {
  const { gameData } = useContext(Context)
  const { width, height } = useWindowSize()

  return (
    <div className='game-over'>
      <Confetti
        width={width}
        height={height}
        recycle={false}
      />
      <div className='game-over-modal'>
        <h4 className='game-over-header'>Congratulations!</h4>
        {/* <p>You have finished the scavenger hunt, please head back to the booth...</p> */}
        <p className='prizes'>These local businesses are offering a special discount to those who have completed the Monrovia Days Scavenger Hunt:</p>
        <p className='prize'>Business One - %10 off</p>
        <p className='prize'>Business Two - %15 off</p>
        <p className='prize'>Business Three - Buy 1 Get 1</p>
        <p className='prize'>Business Four - %10 off</p>
        <p className='prize'>Business Five - Free with purchase</p>
        <br />
        <h4>Player Stats</h4>
        <p className='game-over-stat'>Game Code: {gameData.gamecode}</p>
        <p className='game-over-stat'>Rank: {gameData.player_ranking}</p>
        <p className='game-over-stat'>Time: {gameData.elapsed_time}</p>
      </div>
    </div>
  )
}

export default GameOver