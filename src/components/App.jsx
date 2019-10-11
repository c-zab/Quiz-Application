import React, { Component } from 'react'
import QuestionList from './quiz/QuestionList.jsx'
import Results from './quiz/Result.jsx'
import ScoreBoard from './quiz/ScoreBoard.jsx'

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
        {
          id: 5,
          text: "What is your name?",
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
              text: 'Carlos'
            },
          ],
          correct: 'd'
        },
      ],
      score: 0,
      current: 1,
      points: 20
    }
  }

  nextQuestion = (answer) => {
    setTimeout(() => {
      if(answer) {
        this.setState(state => {
          return {
            ...state,
            current: state.current + 1,
            score: state.score + state.points
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
    const {questions, score, current, points} = this.state;
    return (
      <div className='container'>
        <h1>Quiz React</h1>
        <p>Quiz Application built in React</p>
        {(current <= questions.length) ?
          <React.Fragment>
            <ScoreBoard total={questions.length} current={current} score={score} />
            <QuestionList
              questions={questions}
              score={score}
              current={current}
              nextQuestion={this.nextQuestion}
            />
          </React.Fragment>
          : <Results total={questions.length} correct={score/points} percentage={parseInt((score/(questions.length*points))*100, 10)} />
        }
      </div>
    )
  }
}

export default App
