import React from 'react'
import { useWindowSize } from 'react-use'
import Confetti from 'react-confetti'
// import Footer from '../components/Footer'
import '../styles/GameOver.css'

function GameOver() {
  const { width, height } = useWindowSize()
  return (
    <div className='game-over'>
      <Confetti
      width={width}
      height={height}
      recycle={false}
      />
      <div className='game-over-modal'>
        <h4 className='game-over-header'>Congratulations!</h4>
        <p>You have finished the scavenger hunt, please head back to the booth...</p>
      </div>
      {/* <Footer /> */}
    </div>
  )
}

export default GameOver