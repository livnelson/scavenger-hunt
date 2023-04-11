import React, { useState } from 'react'
import '../styles/Home.css'

function Home({ nickname }) {
  const [startTime, setStartTime] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('button clicked')

    // const configObj = {
    //   nickname: code
    // }

    // fetch('https://jollyrogertelephone.com/8MEBAA7K6yxrnYes5DTwgA7m-md23.php', {
    //   method: 'PATCH',
    //   headers: {
    //     'Content-Type': 'application/json',
    //     'Access-Control-Allow-Origin': '*',
    //   },
    //   body: JSON.stringify()
    // })
    //   .then(res => res.json())
    //   .then(data => console.log(data))
    //   .catch(error => console.error(error))
  }


  return (
    <>
      <img
        src='https://res.cloudinary.com/dovuffpii/image/upload/v1681003620/mdays-great-race/mdays-scavenger-hunt-logo_quuhh6.png'
        alt='Scavenger Hunt Logo'
        className='logo' />
      <div className='home'>
        <p>Brief description... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Augue interdum velit euismod in pellentesque.</p>
        <p className='disclaimer'><em>Don't forget...<br />You MUST allow us to track your location while using the app for the game to work! And write down your game code incase you need to rejoin later.</em></p>
        <h2>Your Game Code:</h2>
        <h2 className='user-code'>{nickname}</h2>
        <h4 className='home-header'>Ready to begin?</h4>
        <button
          className='button'
          onClick={handleSubmit}
        >Let's Go!
        </button>
      </div>
    </>
  )
}

export default Home