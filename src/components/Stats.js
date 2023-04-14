import React, { useContext } from 'react'
import { Context } from '../contexts/Context'
import Footer from './Footer'
import '../styles/Stats.css'

function Stats() {
  const { gameData } = useContext(Context)

  return (
    <div className='stats-modal'>
      <div className='stats-card'>
        <div className='stats-body'>
          <h4>Player Stats</h4>
          <h3 className='stats'>
            On Turn: {gameData.turn}
          </h3>
          <h3 className='stats'>
            Player Ranking: {gameData.player_ranking}
          </h3>
          <h3 className='stats'>
            Progress: {gameData.progress}
          </h3>
          <h3 className='stats'>
            Time Since Start: {gameData.elapsed_time}
          </h3>
          <h3 className='stats'>
            Time On Turn: {gameData.turn_time}
          </h3>
          <h3 className='stats'>
            Result: {gameData.result}
          </h3>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Stats