import React from 'react'
import { Routes, Route } from 'react-router-dom'
import ContextProvider from '../contexts/Context'
import Home from '../components/Home'
import GamePage from '../components/GamePage'
import Stats from './Stats'
import GameOver from './GameOver'
import '../styles/App.css'

function App() {

  return (
    <div className='app'>
      <ContextProvider>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/game' element={<GamePage />} />
          <Route path='/player_stats' element={<Stats />} />
          <Route path='/game_over' element={<GameOver />} />
        </Routes>
      </ContextProvider>
    </div>
  )
}

export default App
