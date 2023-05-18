import React from 'react'

function RiddleHint({ gameBody }) {
  return (
    <div>
      <p className='riddle-hint-body'>{gameBody.hint ? gameBody.hint : 'Something went wrong'}</p>
      {gameBody.hint_image ? <img
        className='riddle-hint-image'
        src={gameBody.hint_image}
        alt='hint'
      /> : null}
    </div>
  )
}

export default RiddleHint