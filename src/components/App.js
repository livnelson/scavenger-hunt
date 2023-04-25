import React, { useState, useEffect } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'
import Home from '../components/Home'
import GamePage from '../components/GamePage'
import GameOver from '../components/GameOver'
import '../styles/App.css'

function App() {
  const API_URL = process.env.REACT_APP_PHP_URL
  const [errors, setErrors] = useState([])
  const [gameCode, setGameCode] = useState('')
  const [updatedGameData, setUpdatedGameData] = useState({})
  const [gameBody, setGameBody] = useState(() => {
    const storedGameBody = localStorage.getItem('gameBody')
    return storedGameBody ? JSON.parse(storedGameBody) : null
  })
  const [gameData, setGameData] = useState({
    elapsed_time: '',
    player_ranking: '',
    progress: '',
    result: '',
    start_time: '',
    total_turns: '',
    tries: '',
    turn: '',
    turn_time: '',
  })

  const navigate = useNavigate()

  // local storage for player gamecode
  const storedGameCode = localStorage.getItem('gameCode')

  // local storage for gameBody
  useEffect(() => {
    localStorage.setItem('gameBody', JSON.stringify(gameBody))
  }, [gameBody])

  // when player scans QR code and initiates game, this function sets the gamecode
  useEffect(() => {
    if (storedGameCode) {
      setGameCode(JSON.parse(storedGameCode))
    } else {
      fetch(`${API_URL}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ action: 'enroll_new_player' }),
      }).then((r) => {
        if (r.ok) {
          r.json().then((data) => {
            localStorage.setItem('gameCode', JSON.stringify(data.gamecode))  // store gameCode in localStorage
            console.log(data)
            setGameCode(data.gamecode)
          })
        } else {
          r.json().then((err) => setErrors(err.errors))
        }
      })
    }
  }, [API_URL, storedGameCode])

  // handles 'Lets Go' button on the main page and starts players time and sets first question
  const handleStartGame = (e) => {
    e.preventDefault()
    console.log('game started')
    fetch(`${API_URL}/${gameCode}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ action: 'start_clock', gamecode: gameCode }),
    }).then((r) => {
      if (r.ok) {
        r.json().then((data) => {
          console.log(data)
          setGameData(data)
          setGameBody(data.body)
          localStorage.setItem('gameBody', JSON.stringify(data.body))  // store gameBody in localStorage
          navigate('/game')
        })
      } else {
        r.json().then((err) => setErrors(err.errors))
      }
    })
  }

  return (
    <div className='app'>
      <Routes>
        <Route path='/' element={<Home
          gameCode={gameCode}
          setGameData={setGameData}
          handleStartGame={handleStartGame}
        />} />
        <Route path='/game' element={<GamePage
          gameCode={gameCode}
          gameBody={gameBody}
          setGameBody={setGameBody}
          gameData={gameData}
          setGameData={setGameData}
          updatedGameData={updatedGameData}
          setUpdatedGameData={setUpdatedGameData}
        />} />
        <Route path='/game_over' element={<GameOver
          gameCode={gameCode}
          gameData={gameData}
          updatedGameData={updatedGameData}
        />} />
      </Routes>
      {errors}
    </div>
  )
}

export default App
