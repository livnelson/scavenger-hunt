import { useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRankingStar } from '@fortawesome/free-solid-svg-icons'
// import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons'
import { faHouse } from '@fortawesome/free-solid-svg-icons'
import '../styles/Home.css'

function Footer( ) {
  const navigate = useNavigate()
  
  const stats = <FontAwesomeIcon icon={faRankingStar} />
  // const logout = <FontAwesomeIcon icon={faRightFromBracket} />
  const home = <FontAwesomeIcon icon={faHouse} />

  function handleHome() {
    // console.log('home clicked')
    navigate('/game')
  }

  function handleStats() {
    // console.log('stats clicked')
    navigate('/player_stats')
  }

  // function handleLogout() {
  //   // console.log('logout clicked')
  //   navigate('/logout')
  // }

  return (
    <div className='footer'>
          <button className='footer-button' onClick={handleHome}>{home}</button>
          <button className='footer-button' onClick={handleStats}>{stats}</button>
          {/* <button className='footer-button' onClick={handleLogout}>{logout}</button> */}
      </div>
  )
}

export default Footer