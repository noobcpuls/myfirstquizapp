import React, { useState } from 'react';
import Quiz from './Quiz';
import End from './End';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const [score, setScore] = useState(0);

  const handleAnswerButtonClick = isCorrect => {
    setCount(count + 1);
    if (isCorrect) {
      alert("this answer is correct!");
      setScore(score + 1);
    }
    else {
      alert("this answer is incorrect!");
    }
  }

  if (count < Quiz.length) {
    return (
      <div className="App">
      <div className="question-section">
        <div className="question-count">
          <h2>Question {count + 1}/{Quiz.length}</h2>
        </div>
        <div className="question-text">
          {Quiz[count].question}
        </div>
        <div className="answer-section">
          {Quiz[count].answer.map((index) => (
            <button className="answer-text"
            onClick={() => handleAnswerButtonClick(index.isCorrect)}>
              {index.answerText}
            </button>
          ))}
        </div>
      </div>
    </div>
    );
  }
  else {
    return (
      <End score={score}/>
    )
  }
}

export default App;
