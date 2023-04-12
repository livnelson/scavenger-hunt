import React, { useState } from 'react'
import '../styles/GameCard.css'

function GameCard() {
  const [riddle, setRiddle] = useState('Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Augue interdum velit euismod in pellentesque.')
  const [answer, setAnswer] = useState('')
  const [lat, setLat] = useState(null)
  const [long, setLong] = useState(null)
  const [error, setError] = useState('')

  const geolocationAPI = navigator.geolocation

  
  function handleSubmit(e) {
    e.preventDefault()
    console.log('submit clicked')
    
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
    
    console.log(answer, lat, long)
    
    // const configObj = {
      //   answer: answer,
      //   latitude: lat,
      //   longitude: long,
      // }
      
      // fetch('https://jollyrogertelephone.com/8MEBAA7K6yxrnYes5DTwgA7m-md23.php', {
        //   method: 'PATCH',
        //   headers: {
          //     'Content-Type': 'application/json',
          //     'Access-Control-Allow-Origin': '*',
          //   },
          //   body: JSON.stringify(configObj)
          // })
          //   .then(res => res.json())
          //   .then(data => console.log(data))
          //   .catch(error => console.error(error))
        }


  return (
    <div className='game-card'>
      <h4 className='game-card-subheader'>Riddle:</h4>
      <p className='riddle-text'>{riddle}</p>
      <h4 className='game-card-subheader'>Your Answer:</h4>
      <form onSubmit={handleSubmit}>
        <textarea
          type='text'
          value={answer}
          className='game-form'
          placeholder='Enter your answer here'
          onChange={(e) => { setAnswer(e.target.value) }}
        />
        <button className='button'>Submit</button>
      </form>
      <br />
      <p>Your coordinates are: <br />{[lat, long]}</p>
      {error}
    </div>
  )
}

export default GameCard