import React, { useState } from 'react'
import Stats from './Stats'
import ResetGame from './ResetGame'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse } from '@fortawesome/free-solid-svg-icons'
import { faRankingStar } from '@fortawesome/free-solid-svg-icons'
import { faRotateLeft } from '@fortawesome/free-solid-svg-icons'
// import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons'
import '../styles/Footer.css'

function Footer({ gameCode, setGameCode, gameData, updatedGameData, resetGameCode }) {
  const [showStats, setShowStats] = useState(false)
  const [resetGame, setResetGame] = useState(false)

  const home = <FontAwesomeIcon icon={faHouse} />
  const stats = <FontAwesomeIcon icon={faRankingStar} />
  const reset = <FontAwesomeIcon icon={faRotateLeft} />
  // const logout = <FontAwesomeIcon icon={faRightFromBracket} />

  function handleHome() {
    if (showStats === true) setShowStats(!showStats)
  }

  function handleStats() {
    setShowStats(!showStats)
  }

  // function handleLogout() {
  //   navigate('/logout')
  // }

  function handleResetGame() {
    setResetGame(!resetGame)
  }

  return (
    <div>
      {showStats ? <Stats
        gameCode={gameCode}
        gameData={gameData}
        showStats={showStats}
        setShowStats={setShowStats}
        updatedGameData={updatedGameData}
      /> : null}
      {resetGame ? <ResetGame setResetGame={setResetGame} resetGame={resetGame} resetGameCode={resetGameCode} setGameCode={setGameCode} /> : null}
      <div className='footer'>
        {/* <button className='footer-button' onClick={handleHome}>{home}</button> */}
        <button className='footer-button' onClick={handleStats}>{stats}</button>
        {/* <button className='footer-button' onClick={handleResetGame}>{reset}</button> */}
        {/* <button className='footer-button' onClick={handleLogout}>{logout}</button> */}
      </div>
    </div>
  )
}

export default Footer