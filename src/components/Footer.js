import React, { useState } from 'react'
import Stats from './Stats'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse } from '@fortawesome/free-solid-svg-icons'
import { faRankingStar } from '@fortawesome/free-solid-svg-icons'
// import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons'
import '../styles/Footer.css'

function Footer({ gameCode, gameData, updatedGameData }) {
  const [showStats, setShowStats] = useState(false)

  const home = <FontAwesomeIcon icon={faHouse} />
  const stats = <FontAwesomeIcon icon={faRankingStar} />
  // const logout = <FontAwesomeIcon icon={faRightFromBracket} />

  function handleHome() {
    console.log('home clicked')
    if (showStats === true) setShowStats(!showStats)

  }

  function handleStats() {
    console.log('stats clicked')
    setShowStats(!showStats)
  }

  // function handleLogout() {
  //   // console.log('logout clicked')
  //   navigate('/logout')
  // }

  return (
    <div>
      {showStats ? <Stats
        gameCode={gameCode}
        gameData={gameData}
        showStats={showStats}
        setShowStats={setShowStats}
        updatedGameData={updatedGameData}
      /> : null}
      <div className='footer'>
        <button className='footer-button' onClick={handleHome}>{home}</button>
        <button className='footer-button' onClick={handleStats}>{stats}</button>
        {/* <button className='footer-button' onClick={handleLogout}>{logout}</button> */}
      </div>
    </div>
  )
}

export default Footer