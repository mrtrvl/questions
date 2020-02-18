import React from 'react';
import Question from './Question';

class App extends React.Component {
  questions = [
    {
      question: 'Esimene küsimus',
      id: 1,
      choices: [
        { id: 1, questionId: 1, choice: 'Esimene valik'},
        { id: 2, questionId: 1, choice: 'Teine valik'},
        { id: 3, questionId: 1, choice: 'Kolmas valik'},
        { id: 4, questionId: 1, choice: 'Neljas valik'},
      ]
    },
    {
      question: 'Teine küsimus',
      id: 2,
      choices: [
        { id: 5, questionId: 2, choice: 'Esimene valik'},
        { id: 6, questionId: 2, choice: 'Teine valik'},
        { id: 7, questionId: 2, choice: 'Kolmas valik'},
        { id: 8, questionId: 2, choice: 'Neljas valik'},
      ]
    },
    {
      question: 'Kolmas küsimus',
      id: 3,
      choices: [
        { id: 9, questionId: 3, choice: 'Esimene valik'},
        { id: 10, questionId: 3, choice: 'Teine valik'},
        { id: 11, questionId: 3, choice: 'Kolmas valik'},
        { id: 12, questionId: 3, choice: 'Neljas valik'},
      ]
    }
  ]

  onClick = (data) => {
    console.log(data);
  }

  showQuestions = () => {
    return this.questions.map(question => {
      return (
      <Question
        key={question.id}
        question={question}
        onClick={this.onClick}/>
      )
    });
  }
  render() {
    return (
      <div className="ui container">
        {this.showQuestions()}
      </div>
    );
  }
}

export default App;