import React from 'react'

const Question = ({question}) => {
  return (
    <div className="pure-g block">
      <div className="pure-u-1 text-center"><h2>{question.text}</h2></div>
      <form className="pure-form pure-u-1">
        {question.choices.map((item, index) => {
          return (
            <label key={index} htmlFor={`option-${index}`} className="pure-radio">
              {`${item.id}) `}
              <input id={`option-${index}`} type="radio" name="optionsRadios" value={item.text} />
              {item.text}
            </label>
          )
        })}
    </form>
    </div>
  )
}

export default Question
