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

  render() {
    const {questions, score, current} = this.state;

    return (
      <div>
        <QuestionList questions={questions} score={score} current={current} ></QuestionList>
      </div>
    )
  }
}

export default App
