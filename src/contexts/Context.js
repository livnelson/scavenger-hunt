import { createContext, useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export const Context = createContext()

const ContextProvider = (props) => {
    const [errors, setErrors] = useState([])
    const [error, setError] = useState('')
    const [answer, setAnswer] = useState('')
    const [lat, setLat] = useState(null)
    const [long, setLong] = useState(null)
    const [gameData, setGameData] = useState({
        body: '',
        elapsed_time: '',
        gamecode: '',
        player_ranking: '',
        progress: '',
        result: '',
        start_time: '',
        total_turns: '',
        turn: '',
        turn_time: '',
    })

    const navigate = useNavigate()
    const geolocationAPI = navigator.geolocation

    // local storage for player gamecode
    const storedGameData = localStorage.getItem('gameData')

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

    // the game is a foot! this is when the player clicked the 'Lets Go' button on the main page and starts their time
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('button clicked')
        fetch('/8MEBAA7K6yxrnYes5DTwgA7m-md23.php', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ action: 'start_clock', gamecode: gameData.gamecode }),
        }).then((r) => {
            if (r.ok) {
                r.json().then((data) => {
                    console.log(data)
                    navigate('/game')
                })
            } else {
                r.json().then((err) => setErrors(err.errors))
            }
        })
    }

    // when player scans QR code and initiates game this sets the gamecode and first riddle (body)
    useEffect(() => {
        if (storedGameData) {
            setGameData(JSON.parse(storedGameData))
        } else {
            fetch('/8MEBAA7K6yxrnYes5DTwgA7m-md23.php', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ action: 'get_turn' }),
            }).then((r) => {
                if (r.ok) {
                    r.json().then((gameData) => {
                        localStorage.setItem('gameData', JSON.stringify(gameData))
                        console.log(gameData)
                        setGameData(gameData)

                    })
                } else {
                    r.json().then((err) => setErrors(err.errors))
                }
            })
        }
    }, [storedGameData])

    // submits player answer, locations coordinates and fetches new riddle (body)
    function submitAnswer(e) {
        e.preventDefault()
        console.log(answer, lat, long)

        fetch(`/8MEBAA7K6yxrnYes5DTwgA7m-md23.php/${gameData.gamecode}`, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                action: 'submit_answer',
                gamecode: gameData.gamecode,
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
                    setGameData(newData)
                }
                else if (newData.result === 2) {
                    console.log('try again')
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
        <Context.Provider value={{
            gameData,
            answer,
            setAnswer,
            lat,
            setLat,
            long,
            setLong,
            submitAnswer,
            handleSubmit,
            error,
            errors
        }} >
            {props.children}
        </Context.Provider>
    )
}

export default ContextProvider