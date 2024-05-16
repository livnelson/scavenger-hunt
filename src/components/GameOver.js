import React, { useState } from 'react'
import { useWindowSize } from 'react-use'
import Confetti from 'react-confetti'
import '../styles/GameOver.css'
import '../styles/Stats.css'

function GameOver({ gameCode, gameData }) {
  const API_URL = process.env.REACT_APP_PHP_URL
  const [errors, setErrors] = useState([])
  const { width, height } = useWindowSize()
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  
  const handleUserInfo = (e) => {
    e.preventDefault()
    console.log('Name:' + username)
    console.log('Email:' + email)
    fetch(`${API_URL}/${gameCode}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ action: 'send_name', gamecode: gameCode, name: username, email: email}),
    }).then((r) => {
      if (r.ok) {
        r.json().then((data) => {
          console.log(data)
        })
      } else {
        r.json().then((err) => setErrors(err.errors))
      }
    })
  }

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
        <p className='prize'>YOU ARE A SUPER MONROVIAN!</p>
        <p className='prizes'>
          Please enter your name and email address to be entered into the
          drawing to win a ride for 2 on the Fire Engine during the annual
          Monrovia Holiday Parade
        </p>
        <h5>December 5, 2024</h5>
        <form className='form' onSubmit={handleUserInfo}>
          <input
            className='input'
            type='text'
            value={username}
            placeholder='Enter Your Name'
            onChange={(e) => setUsername(e.target.value)}
          ></input>
          <input
            className='input'
            type='text'
            value={email}
            placeholder='Enter Your Email Address'
            onChange={(e) => setEmail(e.target.value)}
          ></input>
          <button
            className='submit-btn'
            type='submit'
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  )
}

export default GameOver
