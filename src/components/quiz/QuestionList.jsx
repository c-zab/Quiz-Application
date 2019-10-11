import React from 'react'
import Question from './Question.jsx'

const QuestionList = ({questions, current, nextQuestion}) => {
  return (
    <div className="pure-g">
      {questions.filter(question => question.id === current)
        .map(item => {
          return <Question key={item.id} question={item} nextQuestion={nextQuestion}/>
        })
      }
    </div>
  )
}

export default QuestionList
