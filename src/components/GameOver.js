import React from 'react'
import { useWindowSize } from 'react-use'
import Confetti from 'react-confetti'
import '../styles/GameOver.css'
import '../styles/Stats.css'

function GameOver({ gameCode, gameData }) {
  const { width, height } = useWindowSize()

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
        <p className='prizes'>These local businesses are offering a special discount to those who have completed the Monrovia Days Scavenger Hunt:</p>
        <div className='sponsors'>
          <div className='sponsor'>
            <img className='sponsor-logo' src='https://res.cloudinary.com/dovuffpii/image/upload/v1684433809/mdays-great-race/acai-bar-logo_m9fh0f.png' alt='acai-bar-logo' />
            <p className='prize'>Acai Bar - Nature Bowl & any Smoothie $15</p>
          </div>
          <div className='sponsor'>
            <img className='sponsor-logo' src='https://res.cloudinary.com/dovuffpii/image/upload/v1684433809/mdays-great-race/bella-sera-logo_cibqmp.png' alt='bella-sera-logo' />
            <p className='prize'>Bella Sera - $5 off bottomless mimosas (Sat May 20th 10am-2pm only)</p>
          </div>
          <div className='sponsor'>
            <img className='sponsor-logo' src='https://res.cloudinary.com/dovuffpii/image/upload/v1684433809/mdays-great-race/cafe-on-lemon_feqiie.png' alt='cafe-on-lemon-logo' />
            <p className='prize'>Cafe on Lemon - %10 off</p>
          </div>
          <div className='sponsor'>
            <img className='sponsor-logo' src='https://res.cloudinary.com/dovuffpii/image/upload/v1684433809/mdays-great-race/jakes-logo_f80b1u.png' alt='jakes-roadhouse-logo' />
            <p className='prize'>Jake's Roadhouse - 20% off your meal</p>
          </div>
          <div className='sponsor'>
            <img className='sponsor-logo' src='https://res.cloudinary.com/dovuffpii/image/upload/v1684433810/mdays-great-race/knight-cap-logo_cjny7b.png' alt='knight-cap-logo' />
            <p className='prize'>Knight Cap - Free Chips y Salsa with Entree purchase</p>
          </div>
          <div className='sponsor'>
            <img className='sponsor-logo' src='https://res.cloudinary.com/dovuffpii/image/upload/v1684433810/mdays-great-race/la-adelita-logo_l1wsqh.png' alt='la-adelita-logo' />
            <p className='prize'>La Adelita - Free Soda with purchase of full meal</p>
          </div>
          <div className='sponsor'>
            <img className='sponsor-logo' src='https://res.cloudinary.com/dovuffpii/image/upload/v1684433810/mdays-great-race/mammas-logo_b3iqjc.png' alt='mammas-juicery-logo' />
            <p className='prize'>Mamma's Juicery - Buy 1 Get 1 Free</p>
          </div>
          <div className='sponsor'>
            <img className='sponsor-logo' src='https://res.cloudinary.com/dovuffpii/image/upload/v1684433809/mdays-great-race/sweet-ethan-logo_yldhvx.png' alt='sweet-ethans-logo' />
            <p className='prize'>Sweet Ethan's - BOGO on any one item up to $6.95</p>
          </div>
          <div className='sponsor'>
            <img className='sponsor-logo' src='https://res.cloudinary.com/dovuffpii/image/upload/v1684433809/mdays-great-race/tacos-papas-logo_tih65t.png' alt='tacos-and-papas-logo' />
            <p className='prize'>Tacos & Papas - 20% off</p>
          </div>
        </div>
        {/* <br /> */}
        {/* <h4>Player Stats</h4>
        <p className='game-over-stat'>Game Code: {gameCode}</p>
        <p className='game-over-stat'>Rank: {gameData.player_ranking}</p>
        <p className='game-over-stat'>Total Time: {gameData.elapsed_time}</p> */}
      </div>
    </div>
  )
}

export default GameOver