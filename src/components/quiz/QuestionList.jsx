import React from 'react'
import Question from './Question.jsx'

const QuestionList = ({questions, score, current}) => {
  return (
    <div>
      {questions.map(item => {
        return <Question key={item.id} question={item} />
      })}
    </div>
  )
}

export default QuestionList
