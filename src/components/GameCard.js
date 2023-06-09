import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import useSound from 'use-sound'
import correctAnswer from '../sounds/correctAnswer.mp3'
import wrongAnswer from '../sounds/wrongAnswer.mp3'
import gameOver from '../sounds/gameOver.mp3'
import TryAgain from '../components/TryAgain'
import LocationHint from './LocationHint'
import '../styles/GameCard.css'

function GameCard({ gameCode, gameBody, setGameBody, setUpdatedGameData }) {
  const API_URL = process.env.REACT_APP_PHP_URL
  const [playRight] = useSound(correctAnswer)
  const [playWrong] = useSound(wrongAnswer)
  const [playGameOver] = useSound(gameOver)
  const [error, setError] = useState('')
  const [answer, setAnswer] = useState('')
  const [lat, setLat] = useState(null)
  const [long, setLong] = useState(null)
  const [tryAgain, setTryAgain] = useState(false)
  const [locationHint, setLocationHint] = useState(false)


  // const geolocationAPI = navigator.geolocation

  const navigate = useNavigate()

  // gets the players current location (latitude and longitude)
  // const getUserCoordinates = () => {
  //   if (!geolocationAPI) {
  //     setError('Geolocation API is not available in your browser!')
  //   } else {
  //     geolocationAPI.getCurrentPosition((position) => {
  //       const { coords } = position
  //       setLat(coords.latitude)
  //       setLong(coords.longitude)
  //     }, (error) => {
  //       setError('Something went wrong getting your position!')
  //     })
  //   }
  // }

  // getUserCoordinates()

  // submits player answer for answer_type='text' and fetches new riddle (body)
  function submitAnswer(e) {
    e.preventDefault()
    console.log(gameCode, answer)

    fetch(`${API_URL}/${gameCode}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        action: 'submit_answer',
        gamecode: gameCode,
        answer: answer,
      })
    })
      .then(res => res.json())
      .then(newData => {
        setAnswer('')
        console.log(newData)
        if (newData.result === 1) {  // action if player answer is correct
          console.log('correct')
          console.log(newData)
          setGameBody(newData.body || newData.body.question)
          setUpdatedGameData(newData)
          playRight()
        }
        else if (newData.result === 2) {  // action if player answer is wrong
          console.log('try again')
          setAnswer(answer)
          setUpdatedGameData(newData)
          handleTryAgain()
          playWrong()
        }
        else if (newData.game_over === 1) {  // action if player has answered all questions correctly and game is over
          console.log('game over')
          navigate('/game_over')
          playGameOver()
        }
      })
      .catch(error => console.error(error))
  }

  // submits player location for answer_type='location' and fetches new riddle (body)
  function submitLocation(e) {
    e.preventDefault()
    // getUserCoordinates()
    console.log(gameCode, lat, long)

    if (locationHint === true) {
      setLocationHint(!locationHint)
    }

    fetch(`${API_URL}/${gameCode}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        action: 'submit_answer',
        gamecode: gameCode,
        // latitude: lat,
        // longitude: long
      })
    })
      .then(res => res.json())
      .then(newData => {
        setAnswer('')
        console.log(newData)
        setGameBody(newData.body || newData.body.question)
        setUpdatedGameData(newData)
        playRight()
        if (newData.result === 3) {  // action if player answer is is in the wrong location
          console.log('you do not seem to be in the correct location')
          playWrong()
        }
        else if (newData.game_over === 1) {  // action if player has answered all questions correctly and game is over
          console.log('game over')
          navigate('/game_over')
          playGameOver()
        }
      })
      .catch(error => console.error(error))
  }

  // function to handle tryAgain modal
  function handleTryAgain() {
    setTryAgain(!tryAgain)
  }

  // handle show hint
  function handleLocationHint() {
    setLocationHint(!locationHint)
  }

  // handles game question format, if question is text, it loats question and response form, otherwise it loads location button
  if (gameBody.answer_type === 'Text') {
    return (
      <div className='game-card'>
        <h4 className='game-card-subheader'>Riddle:</h4>
        <p className='game-card-body'>{gameBody.question ? gameBody.question : gameBody}</p>
        {gameBody.image ? <img className='game-image' src={gameBody.image} alt='riddle' /> : null}
        {gameBody.question_image ? <img className='game-image' src={gameBody.question_image} alt='question-riddle' /> : null}
        <h4 className='game-card-subheader'>Your Answer:</h4>
        <form onSubmit={submitAnswer}>
          <input
            type='text'
            value={answer}
            className='game-form'
            placeholder='Enter your answer here'
            onChange={(e) => { setAnswer(e.target.value) }}
          />
          <button className='button'>Submit Answer</button>
        </form>
        {tryAgain ? <TryAgain gameBody={gameBody} answer={answer} tryAgain={tryAgain} setTryAgain={setTryAgain} setAnswer={setAnswer} /> : null}
        {error}
      </div>
    )
  } else if (gameBody.answer_type === 'Location') {
    return (
      <div className='game-card'>
        <h4 className='game-card-subheader'>Riddle:</h4>
        <p className='game-card-body'>{gameBody.question ? gameBody.question : gameBody}</p>
        {gameBody.image ? <img className='game-image' src={gameBody.image} alt='riddle' /> : null}
        {gameBody.question_image ? <img className='game-image' src={gameBody.question_image} alt='question-riddle' /> : null}
        <p className='location-question-subheader'><em>When you think you are in the right spot click the button below</em></p>
        <button className='button' onClick={submitLocation}>I'm Here</button>
        <p className='need-hint' onClick={handleLocationHint}>Need a hint? <em>Click Here</em></p>
        { locationHint ? <LocationHint gameBody={gameBody} /> : null }
        {tryAgain ? <TryAgain gameBody={gameBody} answer={answer} tryAgain={tryAgain} setTryAgain={setTryAgain} setAnswer={setAnswer} /> : null}
        {error}
      </div>
    )
  }
}

export default GameCard