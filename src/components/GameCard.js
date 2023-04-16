import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import TryAgain from '../components/TryAgain'
import '../styles/GameCard.css'

function GameCard({ gameCode, gameBody, setGameBody, setUpdatedGameData }) {
  const [error, setError] = useState('')
  const [answer, setAnswer] = useState('')
  const [lat, setLat] = useState(null)
  const [long, setLong] = useState(null)
  const [tryAgain, setTryAgain] = useState(false)


  const geolocationAPI = navigator.geolocation

  const navigate = useNavigate()

  // gets the players current location (latitude and longitude)
  const getUserCoordinates = () => {
    if (!geolocationAPI) {
      setError('Geolocation API is not available in your browser!')
    } else {
      geolocationAPI.getCurrentPosition((position) => {
        const { coords } = position
        setLat(coords.latitude)
        setLong(coords.longitude)
      }, (error) => {
        setError('Something went wrong getting your position!')
      })
    }
  }

  getUserCoordinates()

  function handleTryAgain() {
    setTryAgain(!tryAgain)
  }

  // submits player answer, locations coordinates and fetches new riddle (body)
  function submitAnswer(e) {
    e.preventDefault()
    getUserCoordinates()
    console.log(gameCode, answer, lat, long)

    fetch(`/8MEBAA7K6yxrnYes5DTwgA7m-md23.php/${gameCode}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        action: 'submit_answer',
        gamecode: gameCode,
        answer: answer,
        latitude: lat,
        longitude: long
      })
    })
      .then(res => res.json())
      .then(newData => {
        setAnswer('')
        console.log(newData)
        if (newData.result === 1) {
          console.log('correct')
          console.log(newData)
          setGameBody(newData.body || newData.body.question)
        }
        else if (newData.result === 2) {
          console.log('try again')
          setAnswer(answer)
          setUpdatedGameData(newData)
          handleTryAgain()
          // setAnswer('')
        }
        else if (newData.result === 3) {
          console.log('you do not seem to be in the correct location')
        }
        else if (newData.game_over === 1) {
          console.log('game over')
          navigate('/game_over')
        }
      })

      .catch(error => console.error(error))
  }

  return (
    <div className='game-card'>
      <h4 className='game-card-subheader'>Riddle:</h4>
      <p className='game-card-body'>{ gameBody.question ? gameBody.question : gameBody }</p>
      { gameBody.image ? <img className='game-image' src={gameBody.image} alt='riddle' /> : null }
      { gameBody.question_image ? <img className='game-image' src={gameBody.question_image} alt='question-riddle' /> : null }
      <h4 className='game-card-subheader'>Your Answer:</h4>
      <form onSubmit={submitAnswer}>
        <input
          type='text'
          value={answer}
          className='game-form'
          placeholder='Enter your answer here'
          onChange={(e) => { setAnswer(e.target.value)}}
        />
        <button className='button'>Submit Answer</button>
      </form>
      { tryAgain ? <TryAgain answer={answer} tryAgain={tryAgain} setTryAgain={setTryAgain} setAnswer={setAnswer} /> : null }
      { error }
    </div>
  )
}

export default GameCard