import React, { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../components/Home'
import GamePage from '../components/GamePage'
import '../styles/App.css'

function App() {

  return (
    <div className="App">
    <Routes>
      <Route path='/' element={ <Home /> } />
      <Route path='game_page' element={ <GamePage/> } />
    </Routes>
    </div>
  )
}

export default App
