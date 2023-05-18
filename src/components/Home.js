import React from 'react'
import '../styles/Home.css'

function Home({ gameCode, handleStartGame }) {

  return (
    <div>
      <img
        src='https://res.cloudinary.com/dovuffpii/image/upload/v1681003620/mdays-great-race/mdays-scavenger-hunt-logo_quuhh6.png'
        alt='Scavenger Hunt Logo'
        className='logo'
      />
      <div className='home'>
        <p>Joins us for Monrovia Days' first Scavenger Hunt!</p>
        <p className='disclaimer'><em>Don't forget...<br />You MUST enable location services while using the app for the game to work! And write down your game code incase you need to rejoin later.</em></p>
        <h2>Your Game Code:</h2>
        <h2 className='user-code'>{gameCode}</h2>
        <h4 className='home-header'>Ready to begin?</h4>
        <button
          className='button'
          onClick={handleStartGame}
        >Let's Go!
        </button>
      </div>
    </div>
  )
}

export default Home