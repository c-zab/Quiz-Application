import React from 'react'

const Result = ({total, correct, percentage}) => {
  const message = (percentage === 100) ? 'Excellent'
                  : (percentage >= 75) ? 'You did great'
                  : (percentage >= 50) ? 'You did okay'
                  : (percentage >= 25) ? 'You did really bad'
                  : 'You can do better than this'

  return (
    <div className='result-content'>
      <div>
        <p>You got {correct} out of {total} correct!</p>
      </div>
      <div className='percentage'>
        <p>{`${percentage}% - ${message}`}</p>
      </div>
      <a href="/">Try again!</a>
    </div>
  )
}

export default Result
