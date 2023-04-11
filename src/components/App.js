import React, { useEffect, useState } from "react"
import { Routes, Route } from "react-router-dom"
import Home from "../components/Home"
import GamePage from "../components/GamePage"
import "../styles/App.css"

function App() {
  const [nickname, setNickname] = useState("")
  const [errors, setErrors] = useState([])

  useEffect(() => {
    fetch("/8MEBAA7K6yxrnYes5DTwgA7m-md23.php", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ action: "get_turn" }),
    }).then((r) => {
      // setIsLoading(false);
      if (r.ok) {
        r.json().then((gameData) => {
          console.log(gameData)

        })
      } else {
        r.json().then((err) => setErrors(err.errors))
      }
    })

  }, [])

  // function handleSubmit(e) {
  //   e.preventDefault()
  //   // setIsLoading(true);
  //   const formData = new URLSearchParams()
  //   formData.append("action", "get turn")

  // }

  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Home nickname={nickname} />} />
        <Route path="game_page" element={<GamePage nickname={nickname} />} />
      </Routes>
      {errors}
    </div>
  )
}

export default App
