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
        <p>Step into an immersive experience, uncover city wonders, crack challenging clues, and unearth hidden treasures! Join the fun and embark on thrilling adventures with the Monrovia Days Scavenger Hunt. Celebrate Monrovia Days in a whole new way and unlock exciting rewards!</p>
        <p className='disclaimer'><em>Don't forget to enable location services so the game will work!</em></p>
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