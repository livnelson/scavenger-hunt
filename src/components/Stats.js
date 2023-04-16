import React from 'react'
// import Footer from './Footer'
import '../styles/Stats.css'

function Stats({ gameCode, gameData, showStats, setShowStats, updatedGameData }) {
  console.log(gameData)

  function handleCloseStats() {
    console.log('clicked closestats')
    setShowStats(!showStats)
  }

  return (
    <div className='stats-modal'>
      <div className='stats-card'>
        <div className='stats-body'>
          <h4>Player Stats</h4>
          <h3 className='stats'>Game Code: {gameCode}</h3>
          <h3 className='stats'>Rank: {updatedGameData.player_ranking}</h3>
          <h3 className='stats'>Progress: {updatedGameData.progress} / {updatedGameData.total_turns}</h3>
          <h3 className='stats'>Tries This Turn: {updatedGameData.tries}</h3>
          <h3 className='stats'>Total Time: {updatedGameData.elapsed_time}</h3>
        </div>
          <button className='button' onClick={handleCloseStats}>Close Stats</button>
      </div>
    </div>
  )
}

export default Stats