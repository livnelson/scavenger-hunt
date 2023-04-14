import React, { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { Context } from '../contexts/Context'
import '../styles/Home.css'

function Home() {
  const [errors, setErrors] = useState([])
  const {gameData, handleSubmit} = useContext(Context)
  const navigate = useNavigate()

//   const handleSubmit = (e) => {
//     e.preventDefault()
//     console.log('button clicked')
//     fetch('/8MEBAA7K6yxrnYes5DTwgA7m-md23.php', {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify({ action: 'start_clock' , gamecode: gameData.gamecode }),
//   }).then((r) => {
//     if (r.ok) {
//         r.json().then((data) => {
//           console.log(data)
//           navigate('/game')
//         })
//     } else {
//         r.json().then((err) => setErrors(err.errors))
//     }
// })
    
//   }

  return (
    <div>
      <img
        src='https://res.cloudinary.com/dovuffpii/image/upload/v1681003620/mdays-great-race/mdays-scavenger-hunt-logo_quuhh6.png'
        alt='Scavenger Hunt Logo'
        className='logo' />
      <div className='home'>
        <p>Brief description... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Augue interdum velit euismod in pellentesque.</p>
        <p className='disclaimer'><em>Don't forget...<br />You MUST enable location services while using the app for the game to work! And write down your game code incase you need to rejoin later.</em></p>
        <h2>Your Game Code:</h2>
        <h2 className='user-code'>{gameData.gamecode}</h2>
        <h4 className='home-header'>Ready to begin?</h4>
        <button
          className='button'
          onClick={handleSubmit}
        >Let's Go!
        </button>
      </div>
    </div>
  )
}

export default Home