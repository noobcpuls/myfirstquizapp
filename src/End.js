import React from 'react';
import './App.css';

function End(props) {
    return (
        <div className="end-section">
            <h1 className="end-text">Well done!</h1>
            <p className="end-score">Your Score is {props.score}</p>
        </div>
    )
}

export default End;