import React from 'react'

const Result = ({total, current, score}) => {
  return (
    <div className='scoreboard-content'>
      <div>
        <p>Question {current} out of {total}</p>
      </div>
      <div className='score'>
        <p>Score {score}</p>
      </div>
    </div>
  )
}

export default Result
