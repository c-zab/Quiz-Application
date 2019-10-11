import React, { Component } from 'react'
import QuestionList from './quiz/QuestionList.jsx'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: [
        {
          id: 1,
          text: 'What is your name?',
          choices: [
            {
              id: 'a',
              text: 'Michael'
            },
            {
              id: 'b',
              text: 'Brad'
            },
            {
              id: 'c',
              text: 'Pewds'
            },
            {
              id: 'd',
              text: 'Steven'
            },
          ],
          correct: 'b'
        },
        {
          id: 2,
          text: "What is your father's name?",
          choices: [
            {
              id: 'a',
              text: 'Juan'
            },
            {
              id: 'b',
              text: 'Anthony'
            },
            {
              id: 'c',
              text: 'Steve'
            },
            {
              id: 'd',
              text: 'Carlos'
            },
          ],
          correct: 'c'
        },
        {
          id: 3,
          text: "What is your mother's name?",
          choices: [
            {
              id: 'a',
              text: 'Micaela'
            },
            {
              id: 'b',
              text: 'Karla'
            },
            {
              id: 'c',
              text: 'Katrina'
            },
            {
              id: 'd',
              text: 'Gabriela'
            },
          ],
          correct: 'd'
        },
        {
          id: 4,
          text: "What is your friend's name?",
          choices: [
            {
              id: 'a',
              text: 'Sergio'
            },
            {
              id: 'b',
              text: 'Sady'
            },
            {
              id: 'c',
              text: 'Xato'
            },
            {
              id: 'd',
              text: 'Dany'
            },
          ],
          correct: 'a'
        },
      ],
      score: 0,
      current: 1
    }
  }

  nextQuestion = (answer) => {
    setTimeout(() => {
      if(answer) {
        this.setState(state => {
          return {
            ...state,
            current: state.current + 1,
            score: state.score + 20
          }
        })
      } else {
        this.setState(state => {
          return {
            ...state,
            current: state.current + 1,
          }
        })
      }
    }, 500);
  }

  render() {
    const {questions, score, current} = this.state;

    return (
      <div className='container'>
        <h1>Quiz React</h1>
        <p>Quiz Application built in React</p>
        <p><strong>{(questions.length >= current) ? `Your score is: `: `Your final score is: `} {score}</strong></p>
        <QuestionList
          questions={questions}
          score={score}
          current={current}
          nextQuestion={this.nextQuestion}
        />
      </div>
    )
  }
}

export default App
