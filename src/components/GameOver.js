import React, { useState } from 'react';
import { useWindowSize } from 'react-use';
import Confetti from 'react-confetti';
import '../styles/GameOver.css';
import '../styles/Stats.css';

function GameOver({ gameCode, gameData }) {
  const API_URL = 'https://jollyrogertelephone.com/8MEBAA7K6yxrnYes5DTwgA7m-md23.php';
  const [errors, setErrors] = useState([]);
  const [successMessage, setSuccessMessage] = useState(''); // New state for success message
  const { width, height } = useWindowSize();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  
  const handleUserInfo = (e) => {
    e.preventDefault();
    fetch(`${API_URL}/${gameCode}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ action: 'send_name', gamecode: gameCode, name: username, email: email }),
    }).then((r) => {
      if (r.ok) {
        r.json().then((data) => {
          setSuccessMessage('Your information was successfully submitted!'); // Set success message
          setErrors([]); // Clear any previous errors
        })
      } else {
        r.json().then((err) => {
          setErrors(err.errors);
          setSuccessMessage(''); // Clear success message in case of error
        })
      }
    })
  };

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
        <p className='prize'>YOU KNOW MONROVIA WELL</p>
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
        {successMessage && <p className='success-message'>{successMessage}</p>}
        {errors.length > 0 && <p className='error-message'>{errors.join(', ')}</p>}
        <p className='winner-message'><em>Winner will receive an email with further details within 2 weeks</em></p>
      </div>
    </div>
  );
}

export default GameOver;
