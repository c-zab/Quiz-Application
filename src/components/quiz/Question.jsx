import React from 'react'

const Question = ({question, nextQuestion}) => {

  return (
    <div className='quiz-content'>
      <div className="pure-u-1 text-center title">
        <h2>{question.text}</h2>
      </div>
      <form className="pure-form pure-u-1">
        {question.choices.map((item, index) => {
          return (
            <label
              key={index}
              className="pure-radio option"
            >
              {`${item.id}) `}
              <input
                id={`option-${index}`}
                type="radio"
                name="optionsRadios"
                value={item.text}
                onClick={ () => nextQuestion(item.id === question.correct)}
              />
              {item.text}
            </label>
          )
        })}
      </form>
    </div>
  )
}

export default Question
